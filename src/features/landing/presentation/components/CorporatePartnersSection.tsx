import { PartnerCard } from "./PartnerCard";

export const CorporatePartnersSection: React.FC = () => {
  const partners = [
    {
      title: "Exclusive Corporate Rate | Bank Mandiri",
      description:
        "Enjoy substantial savings on meeting rooms, event spaces, and other business solutions when you partner with us.",
      imageSrc:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      showLogoBadge: true,
      partnerName: "mandiri",
    },
    {
      title: "Exclusive Member Benefits",
      description:
        "As a valued member, you'll enjoy a range of benefits designed to enhance your experience and provide exceptional value.",
      imageSrc:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80",
      showLogoBadge: true,
    },
    {
      title: "10% Offer for DBS Credit Card Holder",
      description:
        "Exclusive to DBS Credit Card holders: Get a 10% discount on your next booking. Valid for corporate booking only.",
      imageSrc:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      showLogoBadge: true,
      logoBadge: "DBS",
      partnerName: "DBS",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Our Corporate Partners</h2>
          <p className="text-gray-400 text-xs mt-1.5 font-medium">
            Exclusive benefits and promotions tailored to meet the needs of businesses of all sizes.
          </p>
        </div>
        <button className="bg-[#FCEEF0] text-[#8B2635] text-xs font-semibold px-6 py-2 rounded hover:bg-pink-100 transition">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <PartnerCard key={index} {...partner} />
        ))}
      </div>
    </section>
  );
};