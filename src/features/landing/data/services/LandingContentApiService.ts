import { LandingContentDTO } from "../dtos/LandingContentDTO";

const mockLandingContent: LandingContentDTO = {
  hero: {
    image_src:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    city: "Jakarta",
    date: { start: "Mon, 17 Agustus 2024", end: "Tue, 18 Agustus 2024" },
    authenticated_location: "Jakarta, Wisma GKBI",
    authenticated_date: "Mon, 17 August 2024 - Tue, 18 August 2024",
    space_type_options: [
      { id: "all", label: "All Space", checked: true },
      { id: "offices", label: "Offices" },
      { id: "meeting", label: "Meeting Room" },
      { id: "coworking", label: "Co-working Space" },
      { id: "event", label: "Event Space" },
    ],
  },
  browse_spaces: [
    {
      type: "Private Offices",
      image_src:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      color_class: "bg-blue-500",
      icon: "office",
    },
    {
      type: "Coworking Space",
      image_src:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      color_class: "bg-green-500",
      icon: "coworking",
    },
    {
      type: "Meeting Room",
      image_src:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
      color_class: "bg-brand",
      icon: "meeting-room",
    },
  ],
  recommended_spaces: [
    {
      title: "AXA Tower Meeting Room",
      type: "Meeting Room",
      type_color: "brand",
      icon: "meeting-room",
      people: 4,
      price_period: "Daily",
      price: "Rp2,880,000",
      price_discount: "Rp2,400,000",
      hourly_price: "Rp400,000",
      has_discount: true,
      image_src:
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80",
      product_id: "1",
    },
    {
      title: "Wisma GKBI Boardroom",
      type: "Meeting Room",
      type_color: "brand",
      icon: "meeting-room",
      people: 4,
      price_period: "Daily",
      price: "Rp1,200,000",
      has_discount: false,
      image_src:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
      product_id: "1",
    },
    {
      title: "Suite 7 View",
      type: "Office",
      type_color: "blue-500",
      icon: "office",
      people: 3,
      price_period: "Daily",
      price: "Rp3,480,000",
      hourly_price: "Rp400,000",
      has_discount: false,
      image_src:
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80",
      product_id: "1",
    },
    {
      title: "Suite VIP 5 Non View",
      type: "Co-Working Space (Dedicated)",
      type_color: "green-500",
      icon: "coworking",
      people: 1,
      price_period: "Weekly",
      price: "Rp750,000",
      has_discount: false,
      image_src:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
      product_id: "1",
    },
  ],
  stats: [
    { icon: "cities", value: "11", label: "Vibrant Cities" },
    { icon: "locations", value: "22", label: "prime locations in<br>Asia's CBDs" },
    { icon: "years", value: "25", label: "years in business" },
    { icon: "buildings", value: "100%", label: "grade A+ Buildings" },
    {
      icon: "businesses",
      value: "80,000+",
      label: "businesses served",
      full_width: true,
    },
  ],
  promotions: [
    {
      title: "Discount 20% for all co-working space booking!",
      description: "Limited time offer. Don't miss out on this incredible deal.",
      image_src:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    },
    {
      title: "Exclusive 30% discount on monthly co-working space subscriptions!",
      description: "Limited time offer. Don't miss out on this incredible deal.",
      image_src:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    },
    {
      title: "Special offer: Get 25% off any meeting room booking!",
      description: "Don't miss out on this exclusive deal. Limited time only.",
      image_src:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    },
  ],
  deals: [
    {
      title: "Rp200,000 Voucher for Office!",
      valid_until: "Valid until 31 August 2024",
      image_src:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    },
    {
      title: "Rp200,000 Voucher for Office!",
      valid_until: "Valid until 31 August 2024",
      image_src:
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80",
    },
    {
      title: "Rp200,000 Voucher for Office!",
      valid_until: "Valid until 31 August 2024",
      image_src:
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80",
    },
  ],
  meeting_room_images: [
    {
      src: "https://images.unsplash.com/photo-1503423571797-2d2bb372094a?auto=format&fit=crop&q=80",
      alt: "Meeting Room 1",
    },
    {
      src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80",
      alt: "Meeting Room 2",
    },
    {
      src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80",
      alt: "Meeting Room 3",
    },
    {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
      alt: "Meeting Room 4",
    },
  ],
  corporate_partners: [
    {
      title: "Exclusive Corporate Rate | Bank Mandiri",
      description:
        "Enjoy substantial savings on meeting rooms, event spaces, and other business solutions when you partner with us.",
      image_src:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      show_logo_badge: true,
      partner_name: "mandiri",
    },
    {
      title: "Exclusive Member Benefits",
      description:
        "As a valued member, you'll enjoy a range of benefits designed to enhance your experience and provide exceptional value.",
      image_src:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      show_logo_badge: true,
    },
    {
      title: "10% Offer for DBS Credit Card Holder",
      description:
        "Exclusive to DBS Credit Card holders: Get a 10% discount on your next booking. Valid for corporate booking only.",
      image_src:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      show_logo_badge: true,
      logo_badge: "DBS",
      partner_name: "DBS",
    },
  ],
  customer_logos: [
    { name: "Uber" },
    { name: "DELL" },
    { name: "SAMSUNG" },
    { name: "NIKE" },
    { name: "ETIHAD" },
    { name: "ZURICH" },
    { name: "CISCO" },
    { name: "bp" },
    { name: "Exxon" },
  ],
  news_items: [
    {
      title: "Does productivity increase when working remotely?",
      date: "Insights • 03 June 2023",
      excerpt:
        "NEW YORK - A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's...",
      image_src:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
    },
    {
      title: "Morning routine to boost your mood",
      date: "Insights • 03 June 2023",
      excerpt:
        "NEW YORK - A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's...",
      image_src:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    },
    {
      title: "5+ tips to find comfortable co-working space",
      date: "Insights • 03 June 2023",
      excerpt:
        "NEW YORK - A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's...",
      image_src:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    },
  ],
  news_highlight: {
    image_src:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    category: "TIPS",
    date: "Debits - 03 June 2023",
    title: "Minimal workspace for\ninspirations",
  },
  faq_items: [
    {
      question: "What types of office spaces does CEO SUITE offer?",
      answer:
        "We provide a variety of office spaces including private offices, co-working spaces, meeting rooms, and virtual offices. Whether you need a dedicated workspace or flexible hot-desking options, we have a solution to fit your needs.",
    },
    {
      question: "What amenities are included with a CEO SUITE membership?",
      answer:
        "Full-speed Wi-Fi, 24/7 access, premium meeting rooms, business-class printing, reception services, and more.",
    },
    {
      question: "Can I customize my office space?",
      answer:
        "Yes, you can personalize your space with your own furniture and equipment while maintaining our professional infrastructure.",
    },
    {
      question: "How do I book meeting rooms?",
      answer:
        "Book through our app, website, or by contacting our reception team. Instant confirmation is available 24/7.",
    },
    {
      question: "Are there any additional costs for using meeting rooms or other facilities?",
      answer:
        "Standard meeting rooms are available at competitive hourly rates with no hidden fees. Additional premium services may have extra charges.",
    },
    {
      question: "What is included in the administrative support services?",
      answer:
        "Mail handling, phone answering, mail merging, and basic administrative assistance from our professional staff.",
    },
    {
      question: "How can I access CEO SUITE's high-speed internet?",
      answer:
        "Premium Wi-Fi is included in all spaces with secure login credentials provided upon check-in.",
    },
    {
      question: "Can I use CEO SUITE's facilities for events?",
      answer:
        "Yes, our event spaces are available for corporate events, team building activities, and private functions with special rates.",
    },
    {
      question: "What are the operating hours for CEO SUITE locations?",
      answer:
        "Most locations are open 24/7 for members with 24/7 access. Some common areas have standard business hours.",
    },
    {
      question: "How can I contact CEO SUITE for more information or support?",
      answer:
        "Contact our support team 24/7 via email, phone, or through our mobile app chat support.",
    },
  ],
};

export class LandingContentApiService {
  async fetchLandingContent(): Promise<LandingContentDTO> {
    return mockLandingContent;
  }
}
