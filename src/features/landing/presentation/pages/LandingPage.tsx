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
import { useIsAuthenticated } from "@/features/auth";
import { useLandingContentQuery } from "../hooks/useLandingContentQuery";

export const LandingPage: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();
  const { data: content, isLoading, error } = useLandingContentQuery();

  if (isLoading) {
    return (
      <LandingLayout>
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-gray-500">Loading landing page...</p>
        </div>
      </LandingLayout>
    );
  }

  if (error || !content) {
    return (
      <LandingLayout>
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-gray-500">
            {error instanceof Error ? error.message : "Unable to load landing page content."}
          </p>
        </div>
      </LandingLayout>
    );
  }

  return (
    <LandingLayout>
      <AnimatedSection delay={100}>
        <HeroSection content={content.hero} />
      </AnimatedSection>

      {isAuthenticated ? (
        <>
          <AnimatedSection delay={300}>
            <RecommendedForYou spaces={content.recommendedSpaces} />
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <PromotionsSection promotions={content.promotions} />
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <BestDealsSection deals={content.deals} />
          </AnimatedSection>
        </>
      ):(
        <>
        <AnimatedSection delay={200}>
          <BrowseSpaces spaces={content.browseSpaces} />
        </AnimatedSection>
        <AnimatedSection delay={300}>
            <RecommendedForYou spaces={content.recommendedSpaces} />
          </AnimatedSection>
      
      <AnimatedSection delay={400}>
        <StatsSection stats={content.stats} />
      </AnimatedSection>

          <AnimatedSection delay={500}>
            <PromotionsSection promotions={content.promotions} />
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <BestDealsSection deals={content.deals} />
          </AnimatedSection>
      
      <AnimatedSection delay={700}>
        <MeetingRoomPackage images={content.meetingRoomImages} />
      </AnimatedSection>
      
      <AnimatedSection delay={800}>
        <CorporatePartnersSection partners={content.corporatePartners} />
      </AnimatedSection>
      
      <AnimatedSection delay={900}>
        <MarqueeSection logos={content.customerLogos} />
      </AnimatedSection>
      
      <AnimatedSection delay={1000}>
        <NewsSection items={content.newsItems} highlight={content.newsHighlight} />
      </AnimatedSection>
      
      <AnimatedSection delay={1100}>
        <FaqSection items={content.faqItems} />
      </AnimatedSection>
      
      <AnimatedSection delay={1200}>
        <AppPromoSection />
      </AnimatedSection>
      </>
      )}

          
      
    </LandingLayout>
  );
};