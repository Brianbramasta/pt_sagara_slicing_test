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
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
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
            <span><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#FFF0F6"/>
<path d="M26.6719 15.6562H25.2656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#9E1068"/>
<path d="M10.7344 15.6562H12.1406" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#9E1068"/>
<path d="M18.7031 7.6875V9.09375" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#9E1068"/>
<path d="M13.0664 10.0215L14.0602 11.0162" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#9E1068"/>
<path d="M24.3365 10.0215L23.3418 11.0162" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#9E1068"/>
<path d="M19.3162 12.5742C15.1823 16.1827 10.7315 20.7211 9.15044 22.357C8.78012 22.74 8.662 23.2983 8.87528 23.7858C8.99153 24.0506 9.12887 24.3398 9.27091 24.5859C9.41294 24.832 9.59481 25.0955 9.76637 25.3284C10.0814 25.7573 10.6242 25.9336 11.1407 25.8047C13.3481 25.253 19.5042 23.6681 24.6961 21.8925" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#9E1068"/>
<path d="M16.8789 14.8086C16.8789 14.8086 17.8591 15.7892 19.5208 18.6673C21.183 21.5455 21.5416 22.8847 21.5416 22.8847" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#9E1068"/>
<path d="M17.3883 24.2617L17.6667 25.3014C17.7398 25.5744 17.7585 25.8591 17.7216 26.1394C17.6847 26.4196 17.5929 26.6898 17.4516 26.9345C17.3103 27.1793 17.1221 27.3938 16.8979 27.5658C16.6736 27.7379 16.4177 27.8641 16.1447 27.9372C15.8717 28.0103 15.5869 28.029 15.3067 27.992C15.0265 27.9551 14.7563 27.8634 14.5116 27.7221C14.2668 27.5807 14.0523 27.3926 13.8803 27.1683C13.7082 26.9441 13.582 26.6882 13.5089 26.4152L13.2773 25.5489" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#9E1068"/>
<path d="M18.957 11.9531C18.957 11.9531 20.0806 13.1817 22.3161 17.0541C24.552 20.9259 25.0541 22.5136 25.0541 22.5136" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#9E1068"/>
</svg>
</span> Promotions
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