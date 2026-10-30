export const MeetingRoomPackage: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <div className="flex flex-col gap-4 pt-8">
            <img
              src="https://images.unsplash.com/photo-1503423571797-2d2bb372094a?auto=format&fit=crop&q=80"
              alt="Meeting Room 1"
              className="w-full h-1/2 object-cover rounded shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80"
              alt="Meeting Room 2"
              className="w-full h-1/2 object-cover rounded shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-4 pb-8">
            <img
              src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80"
              alt="Meeting Room 3"
              className="w-full h-1/2 object-cover rounded shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80"
              alt="Meeting Room 4"
              className="w-full h-1/2 object-cover rounded shadow-sm"
            />
          </div>
        </div>

        <div className="pr-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meeting Room Package</h2>
          <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
            Elevate your meetings with CEO SUITE's premium meeting rooms, now available at an
            exclusive special rate.
          </p>
          <p className="text-[13px] text-gray-500 leading-relaxed mb-8">
            Whether you're hosting a team brainstorming session, client presentations, or strategic
            workshops, our fully-equipped meeting spaces offer the perfect blend of professionalism
            and comfort.
          </p>
          <button className="bg-[#8B2635] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-[#6E1D29] transition shadow-sm">
            Browse Packages <span className="ml-1 text-xs">▶</span>
          </button>
        </div>
      </div>
    </section>
  );
};