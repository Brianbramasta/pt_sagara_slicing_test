import { useState, useCallback } from "react";
import { DropdownSelect, DateRangePicker } from "./shared";
import { useIsAuthenticated } from "@/features/auth";

interface SearchFormValues {
  city: string;
  date: { start: string; end: string };
  spaceType: string;
}

const spaceTypeOptions = [
  { id: "all", label: "All Space", checked: true },
  { id: "offices", label: "Offices" },
  { id: "meeting", label: "Meeting Room" },
  { id: "coworking", label: "Co-working Space" },
  { id: "event", label: "Event Space" },
];

export const HeroSection: React.FC = () => {
  const [searchValues, setSearchValues] = useState<SearchFormValues>({
    city: "Jakarta",
    date: { start: "Mon, 17 Agustus 2024", end: "Tue, 18 Agustus 2024" },
    spaceType: "All Space",
  });
  const isAuthenticated = useIsAuthenticated();

  const handleSearch = () => {
    console.log("Search:", searchValues);
  };

  const handleSpaceTypeChange = useCallback((selectedLabels: string[]) => {
    setSearchValues((prev) => ({ ...prev, spaceType: selectedLabels[0] || "All Space" }));
  }, []);

  const handleDateChange = useCallback((range: { start: string; end: string }) => {
    setSearchValues((prev) => ({ ...prev, date: range }));
  }, []);

  if (isAuthenticated) {
    return (
      <section className="relative w-full h-[550px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Premium Workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <button className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition z-20">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition z-20">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          <div className="w-2 h-2 rounded-full bg-brand" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center mt-[-40px]">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
            <span className="relative inline-block">
              Elevate Your Workspace
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-brand-stroke"
                preserveAspectRatio="none"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 9.5C45.5 3.5 130 -1.5 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            with Premium Work Places.
          </h2>
          <p className="text-white/90 text-[15px] font-light text-center mb-10">
            Discover the next generation of workspaces with our cutting-edge work places.
          </p>

          <div className="bg-white rounded-xl p-6 w-full shadow-2xl">
            <form className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[13px] text-gray-700 mb-2">Select Location</label>
                  <div className="flex items-center border border-gray-200 rounded-md px-3 py-2.5 bg-white shadow-sm focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition">
                    <svg className="w-4 h-4 text-brand mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <input
                      type="text"
                      value="Jakarta, Wisma GKBI"
                      className="w-full bg-transparent text-[13px] text-gray-800 focus:outline-none"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] text-gray-700 mb-2">Space Type</label>
                  <div className="relative flex items-center border border-gray-200 rounded-md px-3 py-2.5 bg-white shadow-sm focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition">
                    <svg
                      className="w-4 h-4 text-brand mr-2 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                      <path d="M9 3v18" />
                      <path d="M14 12h.01" />
                    </svg>
                    <select className="w-full bg-transparent text-[13px] text-gray-800 focus:outline-none appearance-none cursor-pointer">
                      <option>All Space</option>
                      <option>Private Office</option>
                      <option>Co-working</option>
                    </select>
                    <svg
                      className="w-4 h-4 text-gray-500 absolute right-3 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] text-gray-700 mb-2">Select Date</label>
                  <div className="flex items-center border border-gray-200 rounded-md px-3 py-2.5 bg-white shadow-sm focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition">
                    <svg
                      className="w-4 h-4 text-brand mr-2 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <input
                      type="text"
                      value="Mon, 17 August 2024 - Tue, 18 August 2024"
                      className="w-full bg-transparent text-[12px] text-gray-800 focus:outline-none"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  className="bg-brand text-white px-10 py-2.5 rounded-md text-[13px] font-medium hover:bg-brand-dark transition shadow-sm"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 pr-4">
          Discover Your Perfect Workspace at CEO SUITE.
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed flex items-end pb-2">
          Experience the ultimate in flexible, premium workspaces where luxury meets productivity - CEO SUITE offers an inspiring environment tailored to elevate your business success.
        </p>
      </div>

      <div className="relative w-full">
        <div className="w-full md:w-3/4 ml-auto h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Office Space"
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="bg-[#FCEEF0] p-8 rounded-2xl w-[90%] md:w-[520px] shadow-sm md:absolute top-8 left-0 z-10 mt-6 md:mt-0">
          <h3 className="font-bold text-xl mb-5 text-gray-900">Find your space now</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Select City</label>
              <div className="relative bg-white rounded flex items-center px-3 py-2.5">
                <span className="text-gray-400 mr-2 text-sm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                    fill="#843030"
                  />
                </svg>
                </span>
                <input
                  type="text"
                  value={searchValues.city}
                  onChange={(e) => setSearchValues({ ...searchValues, city: e.target.value })}
                  className="w-full bg-transparent text-sm focus:outline-none text-gray-800"
                />
              </div>
            </div>
            <div>
              <DateRangePicker value={searchValues.date} onChange={handleDateChange} />
            </div>
            <div>
              <DropdownSelect
                label="Space Type"
                defaultValue="All Space"
                options={spaceTypeOptions}
                onChange={handleSpaceTypeChange}
              />
            </div>
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleSearch}
                className="bg-brand text-white px-8 py-2 rounded text-sm font-medium hover:bg-[#6E1D29] transition"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};