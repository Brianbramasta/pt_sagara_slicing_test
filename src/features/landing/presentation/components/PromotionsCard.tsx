interface PromotionsCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const PromotionsCard: React.FC<PromotionsCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="group cursor-pointer">
      <div className="h-[200px] overflow-hidden mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-bold text-[13px] text-gray-900 leading-snug mb-1.5 pr-4">{title}</h3>
      <p className="text-[11px] text-gray-400">{description}</p>
    </div>
  );
};