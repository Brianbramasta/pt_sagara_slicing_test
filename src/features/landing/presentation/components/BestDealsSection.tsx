import { DealCard } from "./DealCard";

export const BestDealsSection: React.FC = () => {
  const deals = [
    {
      title: "Rp200,000 Voucher for Office!",
      validUntil: "Valid until 31 August 2024",
      imageSrc: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    },
    {
      title: "Rp200,000 Voucher for Office!",
      validUntil: "Valid until 31 August 2024",
      imageSrc: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80",
    },
    {
      title: "Rp200,000 Voucher for Office!",
      validUntil: "Valid until 31 August 2024",
      imageSrc: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span>🎯</span> Best Deals
          </h2>
          <p className="text-gray-400 text-xs mt-1.5 font-medium">
            Take advantage of our special promotions and enjoy exceptional savings on your workspace.
          </p>
        </div>
        <button className="bg-[#FCEEF0] text-[#8B2635] text-xs font-semibold px-5 py-1.5 rounded hover:bg-pink-100 transition">
          See All Deals
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <DealCard key={index} {...deal} />
        ))}
      </div>
    </section>
  );
};