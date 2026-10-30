import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center bg-white">
      <div className="flex items-center gap-2">
        <span className="text-[#8B2635] font-bold text-2xl tracking-tighter">CEO SUITE</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        <Link to="/workspaces" className="hover:text-[#8B2635]">Workspaces</Link>
        <Link to="/services" className="hover:text-[#8B2635]">Services</Link>
        <Link to="/package" className="hover:text-[#8B2635]">Package</Link>
        <Link to="/promotions" className="hover:text-[#8B2635]">Promotions & Deals!</Link>
        <Link to="/news" className="hover:text-[#8B2635]">News</Link>
      </div>
      <div className="flex items-center space-x-6 text-sm font-medium">
        <Link to="/signin" className="text-gray-600 hover:text-[#8B2635]">Sign In</Link>
        <Link to="/signup" className="bg-[#8B2635] text-white px-6 py-2 rounded hover:bg-[#6E1D29] transition">Sign Up</Link>
      </div>
    </nav>
  );
};