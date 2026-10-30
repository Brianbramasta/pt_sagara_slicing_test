import { Product } from "../../domain/entities/Product";

interface LocationSectionProps {
  product: Product;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ product }) => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>

      <div className="w-full h-[350px] bg-gray-200 rounded-xl overflow-hidden mb-5">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
          alt="Map View"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-1">{product.location}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{product.address}</p>
      </div>
    </section>
  );
};