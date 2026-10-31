export const OtherSpacesSection: React.FC = () => {
  const categories = [
    { title: "Coworking", image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80" },
    { title: "Meeting Room", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" },
    { title: "Board Room", image: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&q=80" },
    { title: "Class Room", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80" },
    { title: "Seminar", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="col-span-2">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Other Spaces</h2>
          <p className="text-xs text-gray-400 mt-0.5">Find the perfect space for your next meeting or event.</p>
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 bg-gray-300 text-white rounded-lg flex items-center justify-center hover:bg-gray-400 transition text-xs">
            &larr;
          </button>
          <button className="w-8 h-8 bg-brand text-white rounded-lg flex items-center justify-center hover:bg-red-900 transition text-xs">
            &rarr;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {categories.map((cat, idx) => (
          <div key={idx} className="relative h-48 rounded-xl overflow-hidden group cursor-pointer shadow-sm">
            <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between items-center">
              <span className="text-white font-semibold text-[11px]">{cat.title}</span>
              <span className="w-6 h-6 bg-brand text-white rounded-md flex items-center justify-center text-[10px]">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};