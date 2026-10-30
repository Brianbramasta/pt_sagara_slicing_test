import { ProductDTO } from "../dtos/ProductDTO";

const DUMMY_PRODUCTS: ProductDTO[] = [
  {
    id: "1",
    title: "Wisma GKBI Boardroom",
    description: "Meeting room with South Jakarta view, with fully amenities and fullboard facilities.",
    type: "Meeting Room",
    location: "Wisma GKBI, Jakarta",
    address:
      "Jl. Jend. Sudirman No.28, RT.14/RW.1, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210",
    images: [
      { id: "img-1", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", isMain: true },
      { id: "img-2", url: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80", isMain: false },
      { id: "img-3", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80", isMain: false },
      { id: "img-4", url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80", isMain: false },
      { id: "img-5", url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80", isMain: false },
    ],
    capacity: 20,
    prices: [
      { period: "hourly", price: "Rp400,000", isBestDeal: false },
      { period: "daily", price: "Rp2,400,000", isBestDeal: true },
      { period: "weekly", price: "Rp13,350,000", isBestDeal: false },
      { period: "monthly", price: "Rp44,500,000", isBestDeal: false },
    ],
    rating: 4.8,
    ratingCount: 128,
    addOns: [
      { id: "ao-1", title: "Corkage Fee", price: "Rp270,000", unit: "/pax" },
      { id: "ao-2", title: "Lunch Package - Executive", price: "Rp110,000", unit: "/pax" },
      { id: "ao-3", title: "Lunch Package - Standard", price: "Rp85,000", unit: "/pax" },
      { id: "ao-4", title: "Coffee Break - Executive", price: "Rp75,000", unit: "/pax" },
      { id: "ao-5", title: "Coffee Break - Standard", price: "Rp50,000", unit: "/pax" },
      { id: "ao-6", title: "Flip Chart", price: "Rp85,000", unit: "/day" },
      { id: "ao-7", title: "LCD Projector", price: "Rp250,000", unit: "/day" },
      { id: "ao-8", title: "LED Projector", price: "Rp1,500,000", unit: "/day" },
    ],
    similarSpaces: [
      {
        id: "sim-1",
        title: "AXA Tower Meeting Room",
        type: "Meeting Room",
        typeColor: "brand",
        icon: "meeting-room",
        people: 4,
        pricePeriod: "Daily",
        price: "Rp2,880,000",
        hourlyPrice: "Hourly Rp400,000",
        hasDiscount: true,
        imageSrc: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80",
      },
      {
        id: "sim-2",
        title: "AXA Tower Meeting Room",
        type: "Meeting Room",
        typeColor: "brand",
        icon: "meeting-room",
        people: 4,
        pricePeriod: "Daily",
        price: "Rp1,200,000",
        hourlyPrice: "Hourly Rp200,000",
        hasDiscount: true,
        imageSrc: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
      },
      {
        id: "sim-3",
        title: "Suite 7 View",
        type: "Office",
        typeColor: "blue-500",
        icon: "office",
        people: 3,
        pricePeriod: "Daily",
        price: "Rp3,480,000",
        hourlyPrice: "Hourly Rp400,000",
        hasDiscount: false,
        imageSrc: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80",
      },
      {
        id: "sim-4",
        title: "Suite VIP 5 Non View",
        type: "Co-Working Space (Dedicated)",
        typeColor: "green-500",
        icon: "coworking",
        people: 1,
        pricePeriod: "Weekly",
        price: "Rp750,000",
        hourlyPrice: "",
        hasDiscount: false,
        imageSrc: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
      },
    ],
  },
];

export class ProductApiService {
  async fetchProductById(id: string): Promise<ProductDTO> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = DUMMY_PRODUCTS.find((p) => p.id === id);
        if (!product) {
          reject(new Error(`Product with id ${id} not found`));
        }
        resolve(product as ProductDTO);
      }, 500);
    });
  }
}