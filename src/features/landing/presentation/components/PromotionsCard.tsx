interface PromotionsCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const PromotionsCard: React.FC<PromotionsCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="group cursor-pointer border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow transition h-full">
      <div className="h-[200px] overflow-hidden mb-4 rounded-t-lg relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[13px] text-gray-900 leading-snug mb-1.5">{title}</h3>
        <p className="text-[11px] text-gray-400">{description}</p>
      </div>
    </div>
  );
};