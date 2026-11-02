import { Link } from "react-router-dom";
import { RecommendedSpacesCard } from "./RecommendedSpacesCard";
import { LandingContent } from "../../domain/entities/LandingContent";

interface RecommendedForYouProps {
  spaces: LandingContent["recommendedSpaces"];
}

export const RecommendedForYou: React.FC<RecommendedForYouProps> = ({ spaces }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Recommended For You</h2>
          <p className="text-gray-500 text-sm mt-1">Explore top-rated meeting rooms and workspaces.</p>
        </div>
        <button className="border border-gray-200 text-xs font-medium px-4 py-1.5 rounded-full hover:bg-gray-50">Filter</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {spaces.map((space, index) => (
          <Link key={`${space.title}-${index}`} to={`/product/${space.productId}`}>
            <RecommendedSpacesCard {...space} />
          </Link>
        ))}
      </div>
    </section>
  );
};