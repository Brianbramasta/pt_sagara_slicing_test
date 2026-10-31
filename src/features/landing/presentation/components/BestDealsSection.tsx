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
            <span><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#FFF1F0"/>
<g clip-path="url(#clip0_1_24646)">
<path d="M8.1409 18.0017C8.1409 12.5568 12.5549 8.14286 17.9998 8.14286C23.4446 8.14286 27.8586 12.5568 27.8586 18.0017C27.8586 23.4466 23.4446 27.8606 17.9998 27.8606C12.5549 27.8606 8.1409 23.4466 8.1409 18.0017ZM17.9998 6C11.3714 6 5.99805 11.3733 5.99805 18.0017C5.99805 24.63 11.3714 30.0034 17.9998 30.0034C24.6282 30.0034 30.0014 24.63 30.0014 18.0017C30.0014 11.3733 24.6282 6 17.9998 6ZM23.043 12.9567C22.6246 12.5383 21.9462 12.5383 21.5278 12.9567L12.9564 21.5281C12.538 21.9465 12.538 22.6249 12.9564 23.0433C13.3748 23.4617 14.0532 23.4617 14.4716 23.0433L23.043 14.4719C23.4614 14.0535 23.4614 13.3751 23.043 12.9567ZM14.5711 12.6429C13.506 12.6429 12.6426 13.5063 12.6426 14.5714C12.6426 15.6365 13.506 16.5 14.5711 16.5C15.6363 16.5 16.4997 15.6365 16.4997 14.5714C16.4997 13.5063 15.6363 12.6429 14.5711 12.6429ZM21.4283 19.5C20.3632 19.5 19.4997 20.3635 19.4997 21.4286C19.4997 22.4937 20.3632 23.3571 21.4283 23.3571C22.4934 23.3571 23.3569 22.4937 23.3569 21.4286C23.3569 20.3635 22.4934 19.5 21.4283 19.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="#820014"/>
</g>
<defs>
<clipPath id="clip0_1_24646">
<rect width="24" height="24" fill="white" transform="translate(6 6)"/>
</clipPath>
</defs>
</svg>
</span> Best Deals
          </h2>
          <p className="text-gray-400 text-xs mt-1.5 font-medium">
            Take advantage of our special promotions and enjoy exceptional savings on your workspace.
          </p>
        </div>
        <button className="bg-[#FCEEF0] text-brand text-xs font-semibold px-5 py-1.5 rounded hover:bg-pink-100 transition">
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