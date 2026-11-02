export interface LandingContentDTO {
  hero: {
    image_src: string;
    city: string;
    date: { start: string; end: string };
    authenticated_location: string;
    authenticated_date: string;
    space_type_options: { id: string; label: string; checked?: boolean }[];
  };
  browse_spaces: {
    type: string;
    image_src: string;
    color_class: string;
    icon: string;
  }[];
  recommended_spaces: {
    title: string;
    type: string;
    type_color: string;
    icon: string;
    people: number;
    price_period: string;
    price: string;
    price_discount?: string;
    hourly_price?: string;
    has_discount: boolean;
    image_src: string;
    product_id: string;
  }[];
  stats: { icon: string; value: string; label: string; full_width?: boolean }[];
  promotions: { title: string; description: string; image_src: string }[];
  deals: { title: string; valid_until: string; image_src: string }[];
  meeting_room_images: { src: string; alt: string }[];
  corporate_partners: {
    title: string;
    description: string;
    image_src: string;
    show_logo_badge?: boolean;
    logo_badge?: string;
    partner_name?: string;
  }[];
  customer_logos: { name: string }[];
  news_items: { title: string; date: string; excerpt: string; image_src: string }[];
  news_highlight: { image_src: string; category: string; date: string; title: string };
  faq_items: { question: string; answer: string }[];
}
