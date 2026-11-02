import { LandingContent } from "../../domain/entities/LandingContent";

interface MeetingRoomPackageProps {
  images: LandingContent["meetingRoomImages"];
}

export const MeetingRoomPackage: React.FC<MeetingRoomPackageProps> = ({ images }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="grid grid-cols-2 gap-4 ">
          {[images.slice(0, 2), images.slice(2)].map((imageGroup, groupIndex) => (
            <div
              key={groupIndex}
              className={`flex flex-col gap-4 ${groupIndex === 0 ? "pt-8" : "pb-8"}`}
            >
              {imageGroup.map((image) => (
                <img
                  key={image.alt}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-1/2 object-cover rounded shadow-2xl shadow-red-500/20"
                />
              ))}
            </div>
          ))}
        </div>

        <div className="pr-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meeting Room Package</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Elevate your meetings with CEO SUITE's premium meeting rooms, now available at an
            <span className="text-brand"> exclusive special rate.</span>
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            Whether you're hosting a team brainstorming session, client presentations, or strategic
            workshops, our fully-equipped meeting spaces offer the perfect <span className="text-brand"> blend of professionalism
            and comfort.</span>
          </p>
          <button className="bg-brand text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-[#6E1D29] transition shadow-sm flex items-center gap-2">
            Browse Packages <span className="ml-1 text-xs"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg></span>
          </button>
        </div>
      </div>
    </section>
  );
};