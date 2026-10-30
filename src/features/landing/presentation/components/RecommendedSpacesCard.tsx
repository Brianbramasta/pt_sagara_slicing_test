interface RecommendedSpacesCardProps {
  title: string;
  type: string;
  typeColor: string;
  icon: React.ReactNode;
  people: number;
  pricePeriod: string;
  price: string;
  hourlyPrice?: string;
  hasDiscount?: boolean;
  imageSrc: string;
  shownPrice?: boolean;
}

export const RecommendedSpacesCard: React.FC<RecommendedSpacesCardProps> = ({
  title,
  type,
  typeColor,
  icon,
  people,
  pricePeriod,
  price,
  hourlyPrice,
  hasDiscount = false,
  imageSrc,
}) => {
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow transition">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-sm text-gray-900 leading-tight">{title}</h3>
            <span className={`text-${typeColor} text-[10px] flex items-center mt-1`}>
              <span className="w-4 h-4 mr-1.5">{icon}</span>
              {type}
            </span>
          </div>
          <span className="text-gray-500 text-[10px] flex items-center">
            <span className="mr-1">👤</span> {people} People
          </span>
        </div>
        <div className="mt-4">
          <p className="text-[10px] text-gray-400 mb-0.5">{pricePeriod}</p>
          <div className="font-bold text-sm text-gray-900">{price}</div>
          {hasDiscount && hourlyPrice && (
            <p className="text-[10px] text-gray-400 line-through">{hourlyPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
};