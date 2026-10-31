import { Product } from "../../domain/entities/Product";
import { IconStar, IconLocation, IconPerson, IconCube,IconTable } from "./Icons";
import { IconMeetingRoom } from "@/icons/components/icons/IconMeetingRoom";

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
        return <IconTable/>;
      default:
        return <IconCube />;
    }
  };

  return (
    <>
    

      <div className="max-w-7xl mx-auto  py-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>
            <span className="inline-flex items-center gap-1.5 bg-brand-soft text-brand text-[11px] font-semibold p-2 px-4 rounded text-xs bg-[#FFF0F6] rounded-full" >
              <span style={{zoom:0.5}}> <IconMeetingRoom /></span>
              
              {product.type}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold">
           <span style={{zoom:0.7}}>  <IconStar /> </span>{product.rating}/5
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6  pb-2  border-gray-100">
          <div className="flex items-center text-gray-500 text-sm mb-4 sm:mb-0 gap-2">
            <span style={{zoom:0.7}}> <IconLocation /> </span>
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