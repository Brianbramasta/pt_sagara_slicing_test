export const AppPromoSection: React.FC = () => {
  return (
    <section className="bg-[#FCEEF0] relative overflow-hidden mt-10 min-h-[500px] flex items-center" style={{
        backgroundImage: 'url("/images/background/backgound-brand.png")', // Ganti dengan path gambar background Anda
        backgroundSize: 'cover',       // Agar gambar menutupi seluruh section
        backgroundPosition: 'center',  // Posisi gambar di tengah
        backgroundRepeat: 'no-repeat'  // Agar gambar tidak berulang (tiling)
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="pr-8">
            <h2 className="text-3xl font-bold text-brand mb-4">
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
                <span className="" style={{zoom: 0.6}}>
                  <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_ii_1_24803)">
                    <path d="M0.60691 0.523798C0.225462 0.929106 -5.60042e-07 1.55812 -5.60042e-07 2.37269V31.4759C-5.60042e-07 32.2918 0.225462 32.9195 0.60691 33.3248L0.70391 33.4195L16.9436 17.1164V16.9243V16.7322L0.70391 0.427735L0.60691 0.523798Z" fill="url(#paint0_linear_1_24803)"/>
                    <path d="M22.3557 22.5521L16.9434 17.1159V16.9238V16.7317L22.357 11.2969L22.4789 11.3666L28.8928 15.0249C30.724 16.0698 30.724 17.7792 28.8928 18.8253L22.4789 22.4836L22.3557 22.5521Z" fill="url(#paint1_linear_1_24803)"/>
                    <g filter="url(#filter1_i_1_24803)">
                    <path d="M22.4797 22.4804L16.9428 16.9219L0.607423 33.3224C1.2104 33.9645 2.20793 34.0435 3.3313 33.404L22.4797 22.4804Z" fill="url(#paint2_linear_1_24803)"/>
                    </g>
                    <path d="M22.4797 11.3645L3.3313 0.442253C2.20793 -0.198607 1.2104 -0.118335 0.607423 0.523841L16.9441 16.9243L22.4797 11.3645Z" fill="url(#paint3_linear_1_24803)"/>
                    </g>
                    <defs>
                    <filter id="filter0_ii_1_24803" x="0" y="0" width="30.2656" height="33.8457" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-0.19739"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_24803"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="0.19739"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="effect1_innerShadow_1_24803" result="effect2_innerShadow_1_24803"/>
                    </filter>
                    <filter id="filter1_i_1_24803" x="0.607422" y="16.9219" width="21.873" height="16.9238" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-0.19739"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_24803"/>
                    </filter>
                    <linearGradient id="paint0_linear_1_24803" x1="15.5041" y1="2.06476" x2="-6.57975" y2="24.0627" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00A0FF"/>
                    <stop offset="0.0066" stop-color="#00A1FF"/>
                    <stop offset="0.2601" stop-color="#00BEFF"/>
                    <stop offset="0.5122" stop-color="#00D2FF"/>
                    <stop offset="0.7604" stop-color="#00DFFF"/>
                    <stop offset="1" stop-color="#00E3FF"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_24803" x1="31.2765" y1="16.9238" x2="-0.439924" y2="16.9238" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE000"/>
                    <stop offset="0.4087" stop-color="#FFBD00"/>
                    <stop offset="0.7754" stop-color="#FFA500"/>
                    <stop offset="1" stop-color="#FF9C00"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1_24803" x1="19.4729" y1="19.9405" x2="-10.4756" y2="49.7725" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF3A44"/>
                    <stop offset="1" stop-color="#C31162"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_1_24803" x1="-3.50671" y1="-9.16433" x2="9.86611" y2="4.1565" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#32A071"/>
                    <stop offset="0.0685" stop-color="#2DA771"/>
                    <stop offset="0.4762" stop-color="#15CF74"/>
                    <stop offset="0.8009" stop-color="#06E775"/>
                    <stop offset="1" stop-color="#00F076"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </span>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[9px] text-gray-300">GET IT ON</span>
                  <span className="text-[13px] font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* <div className="relative h-[400px] hidden lg:block">
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
                  <span className="text-[8px] text-brand bg-[#FCEEF0] px-2 py-1 rounded">Book Now</span>
                </div>
              </div>
            </div>
            <div className="absolute right-32 top-32 w-[220px] h-[440px] bg-white rounded-[1.8rem] shadow-lg border-8 border-gray-800 overflow-hidden z-10 transform scale-95 origin-bottom-right">
              <div className="bg-brand h-16 w-full px-4 py-2 text-white">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};