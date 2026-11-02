import { PartnerCard } from "./PartnerCard";
import { LandingContent } from "../../domain/entities/LandingContent";

interface CorporatePartnersSectionProps {
  partners: LandingContent["corporatePartners"];
}

export const CorporatePartnersSection: React.FC<CorporatePartnersSectionProps> = ({ partners }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Our Corporate Partners</h2>
          <p className="text-gray-400 text-xs mt-1.5 font-medium">
            Exclusive benefits and promotions tailored to meet the needs of businesses of all sizes.
          </p>
        </div>
        <button className="bg-[#FCEEF0] text-brand text-xs font-semibold px-6 py-2 rounded hover:bg-pink-100 transition">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <PartnerCard key={partner.title} {...partner} />
        ))}
      </div>
    </section>
  );
};