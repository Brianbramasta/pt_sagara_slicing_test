import { SimilarSpace } from "../../domain/entities/Product";

interface SimilarSpacesSectionProps {
  similarSpaces: SimilarSpace[];
}

const getTagColor = (typeColor: string) => {
  const colorClasses: Record<string, string> = {
    brand: "text-brand",
    "blue-500": "text-blue-500",
    "green-500": "text-green-500",
  };
  return colorClasses[typeColor] || "text-gray-500";
};

const getDotColor = (typeColor: string) => {
  const colorClasses: Record<string, string> = {
    brand: "bg-brand",
    "blue-500": "bg-blue-500",
    "green-500": "bg-green-500",
  };
  return colorClasses[typeColor] || "bg-gray-500";
};

export const SimilarSpacesSection: React.FC<SimilarSpacesSectionProps> = ({ similarSpaces }) => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Similar Spaces</h2>
      <p className="text-sm text-gray-500 mb-6">
        Check out these spaces with similar features to the ones you have been looking at.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {similarSpaces.map((space) => (
          <div
            key={space.id}
            className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow transition cursor-pointer"
          >
            <img src={space.imageSrc} alt={space.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-sm text-gray-900 leading-tight truncate w-32">{space.title}</h3>
                  <span className={`${getTagColor(space.typeColor)} text-[10px] flex items-center mt-1`}>
                    <span className={`w-2 h-2 mr-1.5 ${getDotColor(space.typeColor)} rounded-full`}></span>
                    {space.type}
                  </span>
                </div>
                <span className="text-gray-500 text-[10px] flex items-center">
                  <span className="mr-1">👤</span> {space.people} People
                </span>
              </div>
              <div className="mt-4">
                <p className="text-[10px] text-gray-400 mb-0.5">{space.pricePeriod}</p>
                <div className="font-bold text-sm text-gray-900">{space.price}</div>
                {space.hasDiscount && space.hourlyPrice && (
                  <p className="text-[10px] text-gray-400 line-through">{space.hourlyPrice}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};