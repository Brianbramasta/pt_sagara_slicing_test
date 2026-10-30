import { BrowseSpacesCard } from "./BrowseSpacesCard";

export const BrowseSpaces: React.FC = () => {
  const spaceTypes = [
    { type: "Private Offices", imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80", colorClass: "bg-blue-500" , icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_24324)">
<path d="M0 24H12V0H0V24ZM7.5 3H10.5V6H7.5V3ZM7.5 9H10.5V12H7.5V9ZM7.5 15H10.5V18H7.5V15ZM1.5 3H4.5V6H1.5V3ZM1.5 9H4.5V12H1.5V9ZM1.5 15H4.5V18H1.5V15ZM13.5 7.5H24V9H13.5V7.5ZM13.5 24H16.5V18H21V24H24V10.5H13.5V24Z" fill="#0050B3"/>
</g>
<defs>
<clipPath id="clip0_1_24324">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
},
    { type: "Coworking Space", imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80", colorClass: "bg-green-500" , icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.75 15.75H21V6.75C21 6.15326 20.7629 5.58097 20.341 5.15901C19.919 4.73705 19.3467 4.5 18.75 4.5H5.25C4.65326 4.5 4.08097 4.73705 3.65901 5.15901C3.23705 5.58097 3 6.15326 3 6.75V15.75H2.25C2.05109 15.75 1.86032 15.829 1.71967 15.9697C1.57902 16.1103 1.5 16.3011 1.5 16.5V18C1.5 18.5967 1.73705 19.169 2.15901 19.591C2.58097 20.0129 3.15326 20.25 3.75 20.25H20.25C20.8467 20.25 21.419 20.0129 21.841 19.591C22.2629 19.169 22.5 18.5967 22.5 18V16.5C22.5 16.3011 22.421 16.1103 22.2803 15.9697C22.1397 15.829 21.9489 15.75 21.75 15.75ZM10.5 6.75H13.5C13.6989 6.75 13.8897 6.82902 14.0303 6.96967C14.171 7.11032 14.25 7.30109 14.25 7.5C14.25 7.69891 14.171 7.88968 14.0303 8.03033C13.8897 8.17098 13.6989 8.25 13.5 8.25H10.5C10.3011 8.25 10.1103 8.17098 9.96967 8.03033C9.82902 7.88968 9.75 7.69891 9.75 7.5C9.75 7.30109 9.82902 7.11032 9.96967 6.96967C10.1103 6.82902 10.3011 6.75 10.5 6.75ZM21 18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V17.25H21V18Z" fill="#5B8C00"/>
</svg>
},
    { type: "Meeting Room", imageSrc: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80", colorClass: "bg-brand" , icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_24340)">
<path d="M20.8 8.99992H12V16.9999H11V20.9999H5C4.73478 20.9999 4.48043 20.8946 4.29289 20.707C4.10536 20.5195 4 20.2651 4 19.9999V10.9999H1L11.327 1.61192C11.5111 1.4444 11.7511 1.35156 12 1.35156C12.2489 1.35156 12.4889 1.4444 12.673 1.61192L20.8 8.99992ZM14 10.9999H23V17.9999H14V10.9999ZM13 20.9999H24V18.9999H13V20.9999Z" fill="#9E1068"/>
</g>
<defs>
<clipPath id="clip0_1_24340">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
},
  ];

  const handleCheckAvailability = () => {
    console.log("Check availability clicked");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Browse Spaces</h2>
        <p className="text-gray-500 text-sm mt-1">Find the perfect space for your next meeting or event.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[300px]">
        {spaceTypes.map((space, index) => (
          <BrowseSpacesCard
            key={index}
            imageSrc={space.imageSrc}
            type={space.type}
            colorClass={space.colorClass}
            icon={space.icon}
          />
        ))}
        <div className="bg-[#8B2635] text-white flex flex-col justify-between overflow-hidden h-full relative shadow-2xl">
          <div className="p-6 text-center flex-grow flex flex-col justify-center relative z-10">
            <h3 className="font-bold text-lg mb-2">All Space</h3>
            <p className="text-xs text-white/80 leading-relaxed px-2">
              Comfortable space, Full speed wifi, Free coffe & Snack and many more
            </p>
          </div>
          <button onClick={handleCheckAvailability} className="bg-[#E8702A] text-white py-3 text-sm font-medium hover:bg-orange-600 transition flex justify-center items-center gap-2 w-[75%]">
            Check availability <span>&#62;</span>
          </button>
          <div className="absolute top-2 right-2 opacity-10">
            <svg width="96" height="83" viewBox="0 0 96 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                <mask id="mask0_1_24356" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="83">
                <path d="M0.528571 0.528571H94.6143V81.5303H0.528571V0.528571Z" fill="#C4C4C4" stroke-width="1.05714" stroke="white"/>
                </mask>
                <g mask="url(#mask0_1_24356)">
                <path d="M-40.4961 27.3311L-41.3525 27.9508L47.3246 119.099L48.181 118.479L49.0374 117.859L-39.6397 26.7113L-40.4961 27.3311Z" fill="white"/>
                <path d="M-30.7793 20.2979L-31.6357 20.9176L57.0414 112.066L57.8978 111.446L58.7542 110.826L-29.9229 19.6781L-30.7793 20.2979Z" fill="white"/>
                <path d="M-21.0605 13.2656L-21.9169 13.8854L66.7602 105.033L67.6166 104.414L68.473 103.794L-20.2041 12.6458L-21.0605 13.2656Z" fill="white"/>
                <path d="M-11.3438 6.23242L-12.2001 6.8522L76.477 98.0002L77.3334 97.3804L78.1898 96.7607L-10.4874 5.61264L-11.3438 6.23242Z" fill="white"/>
                <path d="M-1.625 -0.800781L-2.4814 -0.180999L86.1957 90.967L87.0521 90.3472L87.9085 89.7275L-0.7686 -1.42056L-1.625 -0.800781Z" fill="white"/>
                <path d="M8.0918 -7.83301L7.2354 -7.21323L95.9125 83.9348L96.7689 83.315L97.6253 82.6952L8.9482 -8.45279L8.0918 -7.83301Z" fill="white"/>
                <path d="M17.8105 -14.8662L16.9541 -14.2464L105.631 76.9016L106.488 76.2818L107.344 75.662L18.6669 -15.486L17.8105 -14.8662Z" fill="white"/>
                <path d="M27.5273 -21.8994L26.6709 -21.2796L115.348 69.8684L116.204 69.2486L117.061 68.6288L28.3837 -22.5192L27.5273 -21.8994Z" fill="white"/>
                <path d="M37.2461 -28.9316L36.3897 -28.3119L125.067 62.8362L125.923 62.2164L126.78 61.5966L38.1025 -29.5514L37.2461 -28.9316Z" fill="white"/>
                <path d="M46.9629 -35.9648L46.1065 -35.3451L134.784 55.803L135.64 55.1832L136.496 54.5634L47.8193 -36.5846L46.9629 -35.9648Z" fill="white"/>
                </g>
                </g>
                </svg>

          </div>
        </div>
      </div>
    </section>
  );
};