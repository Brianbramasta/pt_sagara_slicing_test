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
  priceDiscount?: string;
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
  priceDiscount
}) => {
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-lg hover:shadow transition h-full">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover p-2" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h3 className="font-bold text-sm text-gray-900 leading-tight">{title}</h3>
            <span className={`text-${typeColor} text-[10px] flex items-center mt-1 gap-2 ${typeColor=== 'brand' ? 'bg-brand/10' : typeColor=== `blue-500`? 'bg-blue-500/10' : 'bg-green-500/10'} px-2 py-0.5 rounded-full`}>
              <span className="w-4 h-4 mr-1.5 top-[-5px] relative" style={{ zoom: 0.5 }}>
                {icon}
              </span>
              {type}
            </span>
          </div>
          <span className="text-gray-500 text-[12px] flex items-center">
             {people} People
          </span>
        </div>
        <div className="mt-4">
          <p className="text-[10px] text-brand mb-0.5 font-medium">{pricePeriod}</p>
           {hasDiscount && priceDiscount ? (
            <>
            <p className="text-[10px] text-gray-400 line-through">{price}</p>
            <div className="font-bold text-sm text-brand">{priceDiscount}</div>
            </>
          ):(<><div className="font-bold text-sm text-brand">{price}</div></>)}
          
          {hasDiscount && hourlyPrice && (
            <p className="text-[10px] text-gray-800 "><span className="text-gray-400">Hourly</span> {hourlyPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
};