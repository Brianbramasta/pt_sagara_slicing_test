interface NewsItemProps {
  title: string;
  date: string;
  excerpt: string;
  imageSrc: string;
}

export const NewsItem: React.FC<NewsItemProps> = ({ title, date, excerpt, imageSrc }) => {
  return (
    <div className="flex gap-5 cursor-pointer group">
      <div className="w-40 h-28 flex-shrink-0 overflow-hidden rounded">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[9px] text-gray-400 mb-1.5 uppercase tracking-wide">{date}</p>
        <h3 className="font-bold text-[15px] text-gray-900 leading-snug mb-2 group-hover:text-brand transition">
          {title}
        </h3>
        <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed pr-4">{excerpt}</p>
      </div>
    </div>
  );
};