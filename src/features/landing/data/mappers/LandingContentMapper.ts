import { LandingContent } from "../../domain/entities/LandingContent";
import { LandingContentDTO } from "../dtos/LandingContentDTO";

export class LandingContentMapper {
  static toEntity(dto: LandingContentDTO): LandingContent {
    return {
      hero: {
        imageSrc: dto.hero.image_src,
        city: dto.hero.city,
        date: dto.hero.date,
        authenticatedLocation: dto.hero.authenticated_location,
        authenticatedDate: dto.hero.authenticated_date,
        spaceTypeOptions: dto.hero.space_type_options,
      },
      browseSpaces: dto.browse_spaces.map((space) => ({
        type: space.type,
        imageSrc: space.image_src,
        colorClass: space.color_class,
        icon: space.icon,
      })),
      recommendedSpaces: dto.recommended_spaces.map((space) => ({
        title: space.title,
        type: space.type,
        typeColor: space.type_color,
        icon: space.icon,
        people: space.people,
        pricePeriod: space.price_period,
        price: space.price,
        priceDiscount: space.price_discount,
        hourlyPrice: space.hourly_price,
        hasDiscount: space.has_discount,
        imageSrc: space.image_src,
        productId: space.product_id,
      })),
      stats: dto.stats.map((stat) => ({
        icon: stat.icon,
        value: stat.value,
        label: stat.label,
        fullWidth: stat.full_width,
      })),
      promotions: dto.promotions.map((promotion) => ({
        title: promotion.title,
        description: promotion.description,
        imageSrc: promotion.image_src,
      })),
      deals: dto.deals.map((deal) => ({
        title: deal.title,
        validUntil: deal.valid_until,
        imageSrc: deal.image_src,
      })),
      meetingRoomImages: dto.meeting_room_images.map((image) => ({
        src: image.src,
        alt: image.alt,
      })),
      corporatePartners: dto.corporate_partners.map((partner) => ({
        title: partner.title,
        description: partner.description,
        imageSrc: partner.image_src,
        showLogoBadge: partner.show_logo_badge,
        logoBadge: partner.logo_badge,
        partnerName: partner.partner_name,
      })),
      customerLogos: dto.customer_logos.map((logo) => ({ name: logo.name })),
      newsItems: dto.news_items.map((item) => ({
        title: item.title,
        date: item.date,
        excerpt: item.excerpt,
        imageSrc: item.image_src,
      })),
      newsHighlight: {
        imageSrc: dto.news_highlight.image_src,
        category: dto.news_highlight.category,
        date: dto.news_highlight.date,
        title: dto.news_highlight.title,
      },
      faqItems: dto.faq_items.map((item) => ({
        question: item.question,
        answer: item.answer,
      })),
    };
  }
}
