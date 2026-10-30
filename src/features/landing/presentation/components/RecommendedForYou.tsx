import { RecommendedSpacesCard } from "./RecommendedSpacesCard";

export const RecommendedForYou: React.FC = () => {
  const spaces = [
    {
      title: "AXA Tower Meeting Room",
      type: "Meeting Room",
      typeColor: "brand",
      people: 4,
      pricePeriod: "Daily",
      price: "Rp2,880,000",
      hourlyPrice: "Hourly Rp400,000",
      hasDiscount: true,
      imageSrc: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80",
    },
    {
      title: "AXA Tower Meeting Room",
      type: "Meeting Room",
      typeColor: "brand",
      people: 4,
      pricePeriod: "Daily",
      price: "Rp1,200,000",
      imageSrc: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
    },
    {
      title: "Suite 7 View",
      type: "Office",
      typeColor: "blue-500",
      people: 3,
      pricePeriod: "Daily",
      price: "Rp3,480,000",
      hourlyPrice: "Hourly Rp400,000",
      imageSrc: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80",
    },
    {
      title: "Suite VIP 5 Non View",
      type: "Co-Working Space Dedicated",
      typeColor: "green-500",
      people: 1,
      pricePeriod: "Weekly",
      price: "Rp750,000",
      imageSrc: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Recommended For You</h2>
          <p className="text-gray-500 text-sm mt-1">Explore top-rated meeting rooms and workspaces.</p>
        </div>
        <button className="border border-gray-200 text-xs font-medium px-4 py-1.5 rounded hover:bg-gray-50">Filter</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {spaces.map((space, index) => (
          <RecommendedSpacesCard key={index} {...space} />
        ))}
      </div>
    </section>
  );
};