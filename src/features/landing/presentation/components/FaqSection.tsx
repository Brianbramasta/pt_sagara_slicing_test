import { FaqItem } from "./FaqItem";

export const FaqSection: React.FC = () => {
  const faqItems = [
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
  ];

  const handleContact = () => {
    console.log("Contact clicked");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        <div className="lg:col-span-1 pr-4">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
            Frequently Asked<br />Questions
          </h2>
          <p className="text-gray-400 text-sm mb-12">
            Everything You Need to Know About CEO SUITE Services & Facilities!
          </p>

          <div className="bg-[#FCEEF0] p-6 rounded-lg relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#8B2635" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            <h3 className="text-[#8B2635] font-medium text-sm mb-4 relative z-10">
              Haven't answered your question?
            </h3>
            <button onClick={handleContact} className="bg-[#8B2635] text-white text-xs font-medium px-5 py-2 rounded-md hover:bg-[#6E1D29] transition flex items-center gap-2 relative z-10">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};