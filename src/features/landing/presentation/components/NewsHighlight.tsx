import { LandingContent } from "../../domain/entities/LandingContent";

interface NewsHighlightProps {
  highlight: LandingContent["newsHighlight"];
}

export const NewsHighlight: React.FC<NewsHighlightProps> = ({ highlight }) => {
  return (
    <div className="relative h-full min-h-[450px] rounded-lg overflow-hidden group cursor-pointer">
      <img
        src={highlight.imageSrc}
        alt={highlight.title}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      <div className="absolute top-6 left-6 border border-white/60 text-white text-[10px] font-bold px-3 py-1 tracking-wider bg-black/20 backdrop-blur-sm">
        {highlight.category}
      </div>

      <div className="absolute bottom-8 left-8 right-8">
        <p className="text-white/80 text-xs mb-2">{highlight.date}</p>
        <h3 className="text-white text-3xl font-bold leading-tight whitespace-pre-line">
          {highlight.title}
        </h3>
      </div>
    </div>
  );
};