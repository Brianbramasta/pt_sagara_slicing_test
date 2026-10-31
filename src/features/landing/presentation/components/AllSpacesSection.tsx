import { useSpacesQuery } from "../hooks/useSpacesQuery";
import { SpaceCard } from "./search/SpaceCard";
import { Space } from "../../domain/entities/Space";

export const AllSpacesSection: React.FC = () => {
  const { data: spaces = [], isLoading } = useSpacesQuery();

  return (
    <div className="mb-14">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">All Spaces</h2>
          <p className="text-xs text-gray-400 mt-0.5">Explore top-rated meeting rooms and workspaces.</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50 transition">
          <span>⚙️</span> Filter
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading spaces...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {spaces.map((space: Space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <button className="bg-brand hover:bg-red-900 text-white text-xs font-semibold px-8 py-2.5 rounded-xl shadow transition">
          See More
        </button>
      </div>
    </div>
  );
};