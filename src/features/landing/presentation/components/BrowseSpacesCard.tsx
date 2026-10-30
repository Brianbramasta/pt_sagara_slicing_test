interface BrowseSpacesCardProps {
  imageSrc: string;
  type: string;
  colorClass: string;
  icon: React.ReactNode;
}

export const BrowseSpacesCard: React.FC<BrowseSpacesCardProps> = ({ imageSrc, type, colorClass, icon   }) => {
  return (
    <div>
      <div className="relative h-[220px] w-full mb-4 overflow-hidden  group cursor-pointer">
        <img
          src={imageSrc}
          alt={`${type} space`}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute bottom-0 left-0 bg-brand p-3 text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div className="flex items-center  gap-2">
        <span className="text-xl ">{icon}</span>
        <span className="font-medium text-sm">{type}</span>
      </div>
    </div>
  );
};