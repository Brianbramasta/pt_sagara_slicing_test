import { BrowseSpacesCard } from "./BrowseSpacesCard";

export const BrowseSpaces: React.FC = () => {
  const spaceTypes = [
    { type: "Private Offices", imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80", colorClass: "bg-blue-500" },
    { type: "Coworking Space", imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80", colorClass: "bg-green-500" },
    { type: "Meeting Room", imageSrc: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80", colorClass: "bg-brand" },
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {spaceTypes.map((space, index) => (
          <BrowseSpacesCard
            key={index}
            imageSrc={space.imageSrc}
            type={space.type}
            colorClass={space.colorClass}
          />
        ))}
        <div className="bg-[#8B2635] text-white flex flex-col justify-between rounded-sm overflow-hidden h-[220px] relative">
          <div className="p-6 text-center flex-grow flex flex-col justify-center relative z-10">
            <h3 className="font-bold text-lg mb-2">All Space</h3>
            <p className="text-xs text-white/80 leading-relaxed px-2">
              Comfortable space, Full speed wifi, Free coffe & Snack and many more
            </p>
          </div>
          <button onClick={handleCheckAvailability} className="bg-[#E8702A] text-white py-3 text-sm font-medium hover:bg-orange-600 transition flex justify-center items-center gap-2 w-full">
            Check availability <span>&#62;</span>
          </button>
          <div className="absolute top-2 right-2 opacity-10">
            <svg width="40" height="40" viewBox="0 0 20 20" fill="currentColor">
              <path d="M0 0h1v20H0zM4 0h1v20H4zM8 0h1v20H8zM12 0h1v20h-1zM16 0h1v20h-1z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};