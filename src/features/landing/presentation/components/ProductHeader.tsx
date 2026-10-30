import { Product } from "../../domain/entities/Product";
import { IconStar, IconLocation, IconPerson, IconCube, IconCalendar } from "./Icons";

interface ProductHeaderProps {
  product: Product;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({ product }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "capacity":
        return <IconPerson />;
      case "bed":
        return <IconCube />;
      case "area":
        return <span className="w-4 h-4">📐</span>;
      default:
        return <IconCube />;
    }
  };

  return (
    <>
      <div className="bg-brand py-6 px-4 md:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          <label className="block text-white text-xs font-medium mb-2">Select Date</label>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconCalendar />
            </div>
            <input
              type="text"
              placeholder="Select Date"
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-white/50"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>
            <span className="inline-flex items-center gap-1.5 bg-brand-soft text-brand text-[11px] font-semibold px-2.5 py-1 rounded text-xs">
              <IconCube />
              {product.type}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold">
            <IconStar /> {product.rating}/5
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 mb-10 pb-6 border-b border-gray-100">
          <div className="flex items-center text-gray-500 text-sm mb-4 sm:mb-0">
            <IconLocation />
            {product.location}
          </div>

          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-1.5">
              {getIcon("capacity")}
              {product.capacity}
            </div>
            <div className="flex items-center gap-1.5">
              <IconCube />
              20
            </div>
            <div className="flex items-center gap-1.5">
              {getIcon("area")}
              20
            </div>
          </div>
        </div>
      </div>
    </>
  );
};