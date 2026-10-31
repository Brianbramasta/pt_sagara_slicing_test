import { PromotionsCard } from "./PromotionsCard";

export const PromotionsSection: React.FC = () => {
  const promotions = [
    {
      title: "Discount 20% for all co-working space booking!",
      description: "Limited time offer. Don't miss out on this incredible deal.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    },
    {
      title: "Exclusive 30% discount on monthly co-working space subscriptions!",
      description: "Limited time offer. Don't miss out on this incredible deal.",
      imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80",
    },
    {
      title: "Special offer: Get 25% off any meeting room booking!",
      description: "Don't miss out on this exclusive deal. Limited time only.",
      imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    },
  ];

  const handleSeeAll = () => {
    console.log("See all promotions");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span>🌸</span> Promotions
          </h2>
          <p className="text-gray-400 text-xs mt-1.5 font-medium">
            Don't miss this opportunity to elevate your workspace experience at unbeatable value.
          </p>
        </div>
        <button onClick={handleSeeAll} className="bg-[#FCEEF0] text-brand text-xs font-semibold px-5 py-1.5 rounded hover:bg-pink-100 transition">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promotions.map((promo, index) => (
          <PromotionsCard key={index} {...promo} />
        ))}
      </div>
    </section>
  );
};