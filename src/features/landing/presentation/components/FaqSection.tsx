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
        <div className="lg:col-span-1 pr-4 flex flex-col justify-between">
          <div>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                Frequently Asked<br />Questions
              </h2>
              <p className="text-gray-400 text-sm mb-12">
                Everything You Need to Know About CEO SUITE Services & Facilities!
              </p>
          </div>
          

          <div className="bg-[#FCEEF0] p-6 rounded-lg relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#8B2635" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            <h3 className="text-brand font-medium text-sm mb-4 relative z-10">
              Haven't answered your question?
            </h3>
            <button onClick={handleContact} className="bg-brand text-white text-xs font-medium px-5 py-2 rounded-md hover:bg-[#6E1D29] transition flex items-center gap-2 relative z-10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.07532 17.3538L1.66602 18.3337L2.64586 13.9243C2.02055 12.755 1.66602 11.4191 1.66602 10.0003C1.66602 5.39795 5.39697 1.66699 9.99935 1.66699C14.6017 1.66699 18.3327 5.39795 18.3327 10.0003C18.3327 14.6027 14.6017 18.3337 9.99935 18.3337C8.5806 18.3337 7.24468 17.9792 6.07532 17.3538ZM6.31664 15.5928L6.86125 15.8841C7.81808 16.3957 8.88727 16.667 9.99935 16.667C13.6813 16.667 16.666 13.6822 16.666 10.0003C16.666 6.31843 13.6813 3.33366 9.99935 3.33366C6.31745 3.33366 3.33268 6.31843 3.33268 10.0003C3.33268 11.1124 3.60392 12.1816 4.11559 13.1384L4.40682 13.683L3.86115 16.1385L6.31664 15.5928Z" fill="white"/>
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