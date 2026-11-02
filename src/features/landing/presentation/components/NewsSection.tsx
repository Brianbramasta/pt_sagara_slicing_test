import { NewsItem } from "./NewsItem";
import { NewsHighlight } from "./NewsHighlight";
import { LandingContent } from "../../domain/entities/LandingContent";

interface NewsSectionProps {
  items: LandingContent["newsItems"];
  highlight: LandingContent["newsHighlight"];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ items, highlight }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-xl font-bold text-gray-900 mb-8">News, events and insights for you</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            {items.map((item) => (
              <NewsItem key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-8 pt-2">
            <button className="bg-brand text-white text-xs font-semibold px-6 py-3 rounded hover:bg-[#6E1D29] transition shadow-sm inline-flex items-center gap-2">
              See All Updates <span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg></span>
            </button>
          </div>
        </div>

        <NewsHighlight highlight={highlight} />
      </div>
    </section>
  );
};