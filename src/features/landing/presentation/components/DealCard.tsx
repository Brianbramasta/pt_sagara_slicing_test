interface DealCardProps {
  title: string;
  validUntil: string;
  imageSrc: string;
}

export const DealCard: React.FC<DealCardProps> = ({ title, validUntil, imageSrc }) => {
  return (
    <div className="relative h-[220px] rounded overflow-hidden group cursor-pointer">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-0 left-0 right-0 bg-brand/90 p-4 pt-5 pb-5">
        <h3 className="font-bold text-white text-sm mb-0.5">{title}</h3>
        <p className="text-[10px] text-white/70">{validUntil}</p>
      </div>
    </div>
  );
};