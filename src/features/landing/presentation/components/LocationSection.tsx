import { Product } from "../../domain/entities/Product";

interface LocationSectionProps {
  product: Product;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ product }) => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>

      <div className="w-full h-[350px] rounded-xl overflow-hidden mb-5">
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.350443095598!2d106.80984724127063!3d-6.217432493796476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6ab53c0b8d3%3A0x662eab44f67d78a1!2sWisma%20GKBI%2C%20Jl.%20Jenderal%20Sudirman%20No.28%2C%20RT.14%2FRW.1%2C%20Bend.%20Hilir%2C%20Kecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010210!5e0!3m2!1sid!2sid!4v1793425050007!5m2!1sid!2sid"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Google Maps Wisma GKBI Jakarta"
      ></iframe>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-1">{product.location}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{product.address}</p>
      </div>
    </section>
  );
};