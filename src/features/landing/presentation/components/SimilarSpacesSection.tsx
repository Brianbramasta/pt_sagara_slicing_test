import { SimilarSpace } from "../../domain/entities/Product";
import { RecommendedSpacesCard } from "./RecommendedSpacesCard";

interface SimilarSpacesSectionProps {
  similarSpaces: SimilarSpace[];
}

export const SimilarSpacesSection: React.FC<SimilarSpacesSectionProps> = ({ similarSpaces }) => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Similar Spaces</h2>
      <p className="text-sm text-gray-500 mb-6">
        Check out these spaces with similar features to the ones you have been looking at.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {similarSpaces.map((space) => (
          <RecommendedSpacesCard
            key={space.id}
            title={space.title}
            type={space.type}
            typeColor={space.typeColor}
            icon={space.icon}
            people={space.people}
            pricePeriod={space.pricePeriod}
            price={space.price}
            priceDiscount={space.priceDiscount}
            hourlyPrice={space.hourlyPrice}
            hasDiscount={space.hasDiscount}
            imageSrc={space.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};