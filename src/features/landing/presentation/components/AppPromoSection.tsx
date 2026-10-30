export const AppPromoSection: React.FC = () => {
  return (
    <section className="bg-[#FCEEF0] relative overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="pr-8">
            <h2 className="text-3xl font-bold text-[#8B2635] mb-4">
              Download the CEO SUITE App Now!
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Simplify your meeting planning with our app. Download now to enjoy seamless booking and more.
            </p>

            <div className="flex gap-4">
              <a href="#" className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.63.11 2.91.81 3.73 1.95-3.04 1.74-2.53 5.92.51 7.15-.71 1.62-1.63 3.01-2.82 3.87zm-4.75-14.7c.05-2.59 2.14-4.8 4.67-4.58-.29 2.66-2.53 4.88-4.67 4.58z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[9px] text-gray-300">Download on the</span>
                  <span className="text-[13px] font-semibold">App Store</span>
                </div>
              </a>
              <a href="#" className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 20.9c-.3-.2-.5-.6-.5-1V4.1c0-.4.2-.8.5-1l12 8.4-12 8.4z" fill="#4CAF50" />
                  <path d="M15.6 12.5L20.4 16c.3.2.4.6.3.9s-.4.6-.7.6L12 15l3.6-2.5z" fill="#FFC107" />
                  <path d="M15.6 11.5L12 9 20 6.5c.3 0 .6.2.7.5s.1.6-.3.9L15.6 11.5z" fill="#FF3D00" />
                  <path d="M15.6 11.5L3.6 3.1c-.2-.1-.5-.1-.7 0L12 9l3.6 2.5z" fill="#03A9F4" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[9px] text-gray-300">GET IT ON</span>
                  <span className="text-[13px] font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div className="relative h-[400px] hidden lg:block">
            <div className="absolute right-0 top-10 w-[240px] h-[480px] bg-white rounded-[2rem] shadow-xl border-8 border-gray-900 overflow-hidden z-20">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80"
                className="w-full h-1/2 object-cover"
                alt="App screen 1"
              />
              <div className="p-4 bg-white h-1/2">
                <h4 className="font-bold text-xs mb-1">AXA Tower Boardroom</h4>
                <p className="text-[9px] text-gray-400 mb-2">📍 Jakarta Pusat</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-xs">Rp2.400.000</span>
                  <span className="text-[8px] text-[#8B2635] bg-[#FCEEF0] px-2 py-1 rounded">Book Now</span>
                </div>
              </div>
            </div>
            <div className="absolute right-32 top-32 w-[220px] h-[440px] bg-white rounded-[1.8rem] shadow-lg border-8 border-gray-800 overflow-hidden z-10 transform scale-95 origin-bottom-right">
              <div className="bg-[#8B2635] h-16 w-full px-4 py-2 text-white">
                <div className="text-[8px]">Good Morning,</div>
                <div className="text-[10px] font-bold">John Doe</div>
              </div>
              <div className="p-3 bg-white h-full">
                <div className="bg-gray-100 rounded-md p-2 text-[8px] text-gray-400 mb-3 flex items-center">
                  🔍 Search space...
                </div>
                <h4 className="font-bold text-[10px] mb-2">Recommended For You</h4>
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
                  className="w-full h-24 object-cover rounded mb-2"
                  alt="Recommended"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};