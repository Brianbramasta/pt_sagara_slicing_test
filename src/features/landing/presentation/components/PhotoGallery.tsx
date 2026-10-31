import { ProductImage } from "../../domain/entities/Product";
import { IconShowAllPhotos } from "./Icons";

interface PhotoGalleryProps {
  images: ProductImage[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const mainImage = images.find((img) => img.isMain) || images[0];

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-12 h-auto md:h-[400px]">
      <div className="w-full md:w-2/3 h-64 md:h-full rounded-2xl overflow-hidden shadow-sm">
        <img src={mainImage.url} alt="Main Image" className="w-full h-full object-cover" />
      </div>

      <div className="w-full md:w-1/3 grid grid-cols-2 grid-rows-2 gap-4 h-64 md:h-full">
        {images.filter((img) => !img.isMain).slice(0, 4).map((img, index) => (
          <div key={img.id} className="rounded-xl overflow-hidden shadow-sm">
            <img src={img.url} alt={`Image ${index + 2}`} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="rounded-xl overflow-hidden shadow-sm relative">
          <img src={images[0].url} alt="Show All Photos" className="w-full h-full object-cover" />
          <button className="absolute bottom-3 right-3 bg-white text-gray-800 text-[11px] font-semibold px-3 py-1.5 rounded flex items-center gap-1.5 shadow hover:bg-gray-50 transition">
            <IconShowAllPhotos />
            Show All Photos
          </button>
        </div>
      </div>
    </div>
  );
};