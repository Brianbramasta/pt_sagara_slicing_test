interface DealCardProps {
  title: string;
  validUntil: string;
  imageSrc: string;
}

export const DealCard: React.FC<DealCardProps> = ({ title, validUntil, imageSrc }) => {
  return (
    <div className="relative h-[220px] rounded-md overflow-hidden group cursor-pointer">
      {/* Gambar latar belakang */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
      
      {/* Lapisan gelap (overlay) di seluruh gambar agar agak sedikit digelapkan */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Lapisan Gradasi di seperempat bagian bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand via-brand/80 to-transparent flex flex-col justify-end p-4 pb-4">
        <h3 className="font-medium text-white text-base mb-0.5">{title}</h3>
        <p className="text-[11px] text-white/80">{validUntil}</p>
      </div>
    </div>
  );
};