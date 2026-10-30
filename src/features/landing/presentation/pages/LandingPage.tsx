import { LandingLayout } from "../layout/LandingLayout";
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
import { FaqSection } from "../components/FaqSection";
import { AppPromoSection } from "../components/AppPromoSection";

export const LandingPage: React.FC = () => {
  return (
    <LandingLayout>
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
      <FaqSection />
      <AppPromoSection />
    </LandingLayout>
  );
};