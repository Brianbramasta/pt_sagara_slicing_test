export const Footer: React.FC = () => {
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Workspaces", href: "/workspaces" },
    { label: "Services", href: "/services" },
    { label: "Promotion & Deals!", href: "/promotions" },
    { label: "News", href: "/news" },
  ];

  const handleSubscribe = () => {
    console.log("Subscribe clicked");
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-100 pb-8">
          <div className="flex flex-col items-start gap-4 w-full md:w-auto mb-6 md:mb-0">
            <div className="text-brand font-bold text-xl tracking-tighter">CEO SUITE</div>
            <div className="flex flex-wrap gap-4 md:gap-6 text-xs text-gray-500 font-medium">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-brand">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex w-full md:w-auto mb-4 md:mb-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-200 rounded-l-md w-full md:w-64 text-xs outline-none focus:border-brand"
            />
            <button onClick={handleSubscribe} className="bg-brand text-white px-5 py-2 rounded-r-md text-xs font-medium hover:bg-[#6E1D29] transition">
              Subscribe
            </button>
          </div>

          <div className="text-gray-400 text-[10px]">
            © 1997 - 2024 CEO Suite. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};