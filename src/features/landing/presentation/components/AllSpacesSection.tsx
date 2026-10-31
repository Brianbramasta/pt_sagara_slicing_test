import { useSpacesQuery } from "../hooks/useSpacesQuery";
import { RecommendedSpacesCard } from "./RecommendedSpacesCard";

export const AllSpacesSection: React.FC = () => {
  const { data: spaces = [], isLoading } = useSpacesQuery();

  return (
    <div className="mb-14 mt-12">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">All Spaces</h2>
          <p className="text-xs text-gray-400 mt-0.5">Explore top-rated meeting rooms and workspaces.</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50 transition">
          <span style={{zoom: 0.7}}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6668 16V26.5067C18.7202 26.9067 18.5868 27.3333 18.2802 27.6133C18.1568 27.7369 18.0103 27.835 17.849 27.9019C17.6877 27.9688 17.5148 28.0033 17.3402 28.0033C17.1656 28.0033 16.9926 27.9688 16.8313 27.9019C16.67 27.835 16.5235 27.7369 16.4002 27.6133L13.7202 24.9333C13.5748 24.7911 13.4643 24.6172 13.3973 24.4253C13.3302 24.2333 13.3084 24.0285 13.3335 23.8267V16H13.2935L5.61351 6.16C5.39699 5.88204 5.29929 5.52968 5.34176 5.17991C5.38423 4.83014 5.56342 4.5114 5.84017 4.29333C6.09351 4.10667 6.37351 4 6.66684 4H25.3335C25.6268 4 25.9068 4.10667 26.1602 4.29333C26.4369 4.5114 26.6161 4.83014 26.6586 5.17991C26.7011 5.52968 26.6034 5.88204 26.3868 6.16L18.7068 16H18.6668Z" fill="#434343"/>
</svg>
</span> Filter
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading spaces...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {spaces.map((space) => (
            <RecommendedSpacesCard key={space.id} {...space.similarSpaces[0]} />
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