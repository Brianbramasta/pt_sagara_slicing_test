import { StatsCard } from "./StatsCard";

export const StatsSection: React.FC = () => {
  const stats = [
    { icon: "🌍", value: "11", label: "Vibrant Cities" },
    { icon: "📍", value: "22", label: "prime locations in<br>Asia's CBDs" },
    { icon: "⏳", value: "25", label: "years in business" },
    { icon: "🏛️", value: "100%", label: "grade A+ Buildings" },
    { icon: "🤝", value: "80,000+", label: "businesses served", fullWidth: true },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-0">
        <div className="lg:w-1/2 grid grid-cols-2 gap-y-12 gap-x-4 py-8 lg:pr-12">
          {stats.map((stat, index) => (
            <div key={index} className={stat.fullWidth ? "col-span-2 mt-2" : ""}>
              <StatsCard icon={stat.icon} value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 bg-[#8B2635] p-12 lg:p-16 text-white">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-white/90">Why CEO SUITE?</span>
            <div className="h-[1px] bg-white/40 w-16"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            We revolutionize your<br />workspace
          </h2>
          <p className="text-white/80 text-[13px] leading-relaxed mb-5">
            In today's fast-paced business environment, finding the right workspace solution is crucial
            to your company's success. CEO SUITE offers an unparalleled workspace experience that
            combines premium locations, flexibility, top-notch amenities, and exceptional service to
            meet the needs of modern businesses.
          </p>
          <p className="text-white/80 text-[13px] leading-relaxed">
            As Asia's leading serviced office provider, CEO SUITE stands out as the ideal partner for
            companies seeking more than just office space—a place where business can thrive.
          </p>
        </div>
      </div>
    </section>
  );
};