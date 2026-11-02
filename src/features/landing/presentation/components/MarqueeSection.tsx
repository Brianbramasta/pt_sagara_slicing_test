import { LandingContent } from "../../domain/entities/LandingContent";

interface MarqueeSectionProps {
  logos: LandingContent["customerLogos"];
}

const logoStyles: Record<string, string> = {
  Uber: "text-4xl font-light",
  DELL: "text-3xl font-bold border-2 border-gray-300 rounded-full px-2 py-1",
  SAMSUNG: "text-2xl font-black",
  NIKE: "text-4xl font-bold italic",
  ETIHAD: "text-2xl font-serif",
  ZURICH: "text-2xl font-bold flex items-center gap-2",
  CISCO: "text-2xl font-black flex flex-col items-center leading-none",
  bp: "text-2xl font-bold",
  Exxon: "text-2xl font-bold",
};

export const MarqueeSection: React.FC<MarqueeSectionProps> = ({ logos }) => {
  return (
    <section className="w-full bg-gray-50/50 py-16 overflow-hidden border-t border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-2xl font-medium text-gray-600 relative inline-block">
          Trusted by <span className="text-brand font-bold">80,000+</span> customers
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-[2px] bg-brand/30"></div>
        </h2>
      </div>

      <div className="flex overflow-hidden group w-full relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div
          className="flex animate-marquee whitespace-nowrap items-center min-w-full justify-around gap-16 pr-16 opacity-25"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {logos.map((logo) => (
            <div key={logo.name} className={logoStyles[logo.name] ?? ""}>
              {logo.name === "CISCO" ? (
                <span className="flex flex-col items-center leading-none">
                  <span className="text-xs mb-1">|||...|||</span>
                  {logo.name}
                </span>
              ) : (
                logo.name
              )}
            </div>
          ))}
        </div>

        <div
          className="flex animate-marquee whitespace-nowrap items-center min-w-full justify-around gap-16 pr-16 opacity-25"
          aria-hidden="true"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {logos.map((logo) => (
            <div key={logo.name} className={logoStyles[logo.name] ?? ""}>
              {logo.name === "CISCO" ? (
                <span className="flex flex-col items-center leading-none">
                  <span className="text-xs mb-1">|||...|||</span>
                  {logo.name}
                </span>
              ) : (
                logo.name
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};