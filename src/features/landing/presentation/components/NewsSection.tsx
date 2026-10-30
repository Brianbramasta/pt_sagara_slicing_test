import { NewsItem } from "./NewsItem";
import { NewsHighlight } from "./NewsHighlight";

export const NewsSection: React.FC = () => {
  const newsItems = [
    {
      title: "Does productivity increase when working remotely?",
      date: "Insights • 03 June 2023",
      excerpt:
        "NEW YORK - A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's...",
      imageSrc:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
    },
    {
      title: "Morning routine to boost your mood",
      date: "Insights • 03 June 2023",
      excerpt:
        "NEW YORK - A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's...",
      imageSrc:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    },
    {
      title: "5+ tips to find comfortable co-working space",
      date: "Insights • 03 June 2023",
      excerpt:
        "NEW YORK - A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's...",
      imageSrc:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-xl font-bold text-gray-900 mb-8">News, events and insights for you</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <NewsItem key={index} {...item} />
            ))}
          </div>

          <div className="mt-8 pt-2">
            <button className="bg-[#8B2635] text-white text-xs font-semibold px-6 py-3 rounded hover:bg-[#6E1D29] transition shadow-sm inline-flex items-center gap-2">
              See All Updates <span>&#62;</span>
            </button>
          </div>
        </div>

        <NewsHighlight />
      </div>
    </section>
  );
};