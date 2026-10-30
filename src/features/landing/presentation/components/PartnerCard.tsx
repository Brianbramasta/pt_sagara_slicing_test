interface PartnerCardProps {
  title: string;
  description: string;
  imageSrc: string;
  showLogoBadge?: boolean;
  logoBadge?: string;
  partnerName?: string;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({
  title,
  description,
  imageSrc,
  showLogoBadge = false,
  logoBadge,
  partnerName,
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-[180px] rounded overflow-hidden mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        {showLogoBadge && (
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="text-white text-[10px] font-bold tracking-tighter">CEO SUITE</span>
            {logoBadge && partnerName && (
              <>
                <span className="text-white text-xs">|</span>
                <span className="text-white text-xs font-bold italic">{partnerName}</span>
              </>
            )}
          </div>
        )}
      </div>
      <h3 className="font-bold text-[13px] text-gray-900 leading-snug mb-2">{title}</h3>
      <p className="text-[11px] text-gray-400 leading-relaxed pr-2">{description}</p>
    </div>
  );
};