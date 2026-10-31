import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsAuthenticated, useUser, useLogout } from "@/features/auth";

export const Navbar: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();
  const user = useUser();
  const logout = useLogout();
  const location = useLocation();
  
  const isActiveWorkspace = location.pathname === "/search";
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State untuk menu mobile
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Menutup dropdown user atau mobile menu jika klik di luar area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogoutClick = () => {
    logout();
    setShowDropdown(false);
    setShowMobileMenu(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 relative">
      <section className="py-4 px-6 md:px-12 flex justify-between items-center z-50 relative max-w-7xl mx-auto w-full">
        
        {/* Sisi Kiri: Tombol Hamburger (Mobile) & Logo */}
        <div className="flex items-center gap-4">
          {/* Tombol Hamburger (Hanya tampil di mobile/tablet, hidden di md ke atas) */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden text-gray-700 focus:outline-none hover:text-brand transition"
            aria-label="Toggle Mobile Menu"
          >
            {showMobileMenu ? (
              // Icon Close (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icon Hamburger
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Logo Brand */}
          <Link to="/" className="flex flex-col items-start cursor-pointer">
            <img src="/images/logo/logo.png" alt="CEO SUITE Logo" className="h-8 md:h-10 lg:left-[-15px] lg:relative" />
          </Link>
        </div>

        {/* Menu Navigasi Desktop (Hidden di mobile) */}
        <div className="hidden md:flex space-x-8 text-[13px] text-gray-600 font-medium">
          <Link to="/workspaces" className={`hover:text-brand transition ${isActiveWorkspace ? "text-brand font-semibold" : ""}`}>Workspaces</Link>
          <Link to="/services" className="hover:text-brand transition">Services</Link>
          <Link to="/package" className="hover:text-brand transition">Package</Link>
          <Link to="/promotions" className="hover:text-brand transition">Promotions & Deals!</Link>
          <Link to="/news" className="hover:text-brand transition">News</Link>
        </div>

        {/* Sisi Kanan: Auth (Sign In / Sign Up / User Profile) */}
        {isAuthenticated ? (
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="w-8 h-8 rounded-full bg-[#8E5A9D] text-white flex items-center justify-center text-xs font-medium">
                {user?.fullName?.charAt(0) || "U"}
              </div>
              <div className="hidden sm:flex items-center space-x-1 text-sm text-gray-700 group-hover:text-brand transition">
                <span>{user?.fullName || "User"}</span>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <button
                  onClick={handleLogoutClick}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden sm:flex items-center space-x-6 text-sm font-medium">
            <Link to="/signin" className="text-gray-600 hover:text-brand transition">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-brand text-white px-6 py-2 rounded hover:bg-brand-dark transition"
            >
              Sign Up
            </Link>
          </div>
        )}
      </section>

      {/* ================= MOBILE MENU DROPDOWN / COLLAPSE ================= */}
      {showMobileMenu && (
        <div ref={mobileMenuRef} className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-4 shadow-md absolute top-full left-0 w-full z-45 animate-fadeIn">
          <div className="flex flex-col space-y-3 text-sm text-gray-700 font-medium">
            <Link 
              to="/workspaces" 
              onClick={() => setShowMobileMenu(false)}
              className={`hover:text-brand transition py-1 ${isActiveWorkspace ? "text-brand font-semibold" : ""}`}
            >
              Workspaces
            </Link>
            <Link 
              to="/services" 
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-brand transition py-1"
            >
              Services
            </Link>
            <Link 
              to="/package" 
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-brand transition py-1"
            >
              Package
            </Link>
            <Link 
              to="/promotions" 
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-brand transition py-1"
            >
              Promotions & Deals!
            </Link>
            <Link 
              to="/news" 
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-brand transition py-1"
            >
              News
            </Link>
          </div>

          {/* Tombol Auth tambahan khusus mobile jika belum login */}
          {!isAuthenticated && (
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
              <Link
                to="/signin"
                onClick={() => setShowMobileMenu(false)}
                className="text-center text-sm font-medium text-gray-700 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setShowMobileMenu(false)}
                className="text-center text-sm font-medium bg-brand text-white py-2 rounded-lg hover:bg-brand-dark transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};