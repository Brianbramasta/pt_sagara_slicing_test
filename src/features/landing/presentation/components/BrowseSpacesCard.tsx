interface BrowseSpacesCardProps {
  imageSrc: string;
  type: string;
  colorClass: string;
}

export const BrowseSpacesCard: React.FC<BrowseSpacesCardProps> = ({ imageSrc, type, colorClass }) => {
  return (
    <div>
      <div className="relative h-[220px] w-full mb-4 overflow-hidden rounded-sm group cursor-pointer">
        <img
          src={imageSrc}
          alt={`${type} space`}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute bottom-0 left-0 bg-[#8B2635] p-3 text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className={colorClass + " w-3 h-3 rounded-sm"}></div>
        <span className="font-medium text-sm">{type}</span>
      </div>
    </div>
  );
};