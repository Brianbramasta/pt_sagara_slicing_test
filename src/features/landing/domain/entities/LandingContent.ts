export interface LandingContent {
  hero: {
    imageSrc: string;
    city: string;
    date: { start: string; end: string };
    authenticatedLocation: string;
    authenticatedDate: string;
    spaceTypeOptions: { id: string; label: string; checked?: boolean }[];
  };
  browseSpaces: {
    type: string;
    imageSrc: string;
    colorClass: string;
    icon: string;
  }[];
  recommendedSpaces: {
    title: string;
    type: string;
    typeColor: string;
    icon: string;
    people: number;
    pricePeriod: string;
    price: string;
    priceDiscount?: string;
    hourlyPrice?: string;
    hasDiscount: boolean;
    imageSrc: string;
    productId: string;
  }[];
  stats: { icon: string; value: string; label: string; fullWidth?: boolean }[];
  promotions: { title: string; description: string; imageSrc: string }[];
  deals: { title: string; validUntil: string; imageSrc: string }[];
  meetingRoomImages: { src: string; alt: string }[];
  corporatePartners: {
    title: string;
    description: string;
    imageSrc: string;
    showLogoBadge?: boolean;
    logoBadge?: string;
    partnerName?: string;
  }[];
  customerLogos: { name: string }[];
  newsItems: { title: string; date: string; excerpt: string; imageSrc: string }[];
  newsHighlight: { imageSrc: string; category: string; date: string; title: string };
  faqItems: { question: string; answer: string }[];
}
