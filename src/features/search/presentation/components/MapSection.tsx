export const MapSection: React.FC = () => {
  return (
    <div className="w-full h-full lg:h-screen sticky top-0 bg-gray-200 border-l border-gray-200 overflow-hidden">
      <iframe
        className="w-full h-full border-0 filter contrast-125 opacity-90"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2996914594247!2d106.8227033!3d-6.2240954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e490510fc7%3A0xb35a90d81d4cf273!2sAXA%20Tower!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};