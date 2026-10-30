import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { BrowseSpaces } from "../components/BrowseSpaces";
import { RecommendedForYou } from "../components/RecommendedForYou";
import { StatsSection } from "../components/StatsSection";
import { PromotionsSection } from "../components/PromotionsSection";
import { BestDealsSection } from "../components/BestDealsSection";
import { MeetingRoomPackage } from "../components/MeetingRoomPackage";
import { CorporatePartnersSection } from "../components/CorporatePartnersSection";
import { MarqueeSection } from "../components/MarqueeSection";
import { NewsSection } from "../components/NewsSection";

export const LandingPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <HeroSection />
      <BrowseSpaces />
      <RecommendedForYou />
      <StatsSection />
      <PromotionsSection />
      <BestDealsSection />
      <MeetingRoomPackage />
      <CorporatePartnersSection />
      <MarqueeSection />
      <NewsSection />
    </div>
  );
};