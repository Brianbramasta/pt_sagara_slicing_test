import { LandingLayout } from "../layout/LandingLayout";
import { AnimatedSection } from "../components";
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
import { Footer } from "../components/Footer";

export const LandingPage: React.FC = () => {
  return (
    <LandingLayout>
      <AnimatedSection delay={100}>
        <HeroSection />
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <BrowseSpaces />
      </AnimatedSection>
      
      <AnimatedSection delay={300}>
        <RecommendedForYou />
      </AnimatedSection>
      
      <AnimatedSection delay={400}>
        <StatsSection />
      </AnimatedSection>
      
      <AnimatedSection delay={500}>
        <PromotionsSection />
      </AnimatedSection>
      
      <AnimatedSection delay={600}>
        <BestDealsSection />
      </AnimatedSection>
      
      <AnimatedSection delay={700}>
        <MeetingRoomPackage />
      </AnimatedSection>
      
      <AnimatedSection delay={800}>
        <CorporatePartnersSection />
      </AnimatedSection>
      
      <AnimatedSection delay={900}>
        <MarqueeSection />
      </AnimatedSection>
      
      <AnimatedSection delay={1000}>
        <NewsSection />
      </AnimatedSection>
      
      <AnimatedSection delay={1100}>
        <FaqSection />
      </AnimatedSection>
      
      <AnimatedSection delay={1200}>
        <AppPromoSection />
      </AnimatedSection>
      
    </LandingLayout>
  );
};