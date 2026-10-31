import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownSelect, DateRangePicker, InputField, LocationIcon, LocationIconBrand } from "./shared";
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
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();

  const handleSearch = () => {
    navigate("/search");
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
                className="absolute -bottom-2 left-0 w-full h-3 text-brand"
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
                <InputField
                  value="Jakarta, Wisma GKBI"
                  icon={<LocationIconBrand />}
                  readOnly
                />
              </div>
                <div>
                  <DropdownSelect
                    label="Space Type"
                    defaultValue="All Space"
                    options={spaceTypeOptions}
                  />
                </div>
              <div>
                <label className="block text-[13px] text-gray-700 mb-2">Select Date</label>
                <DateRangePicker
                  value="Mon, 17 August 2024 - Tue, 18 August 2024"
                  // readOnly
                />
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

        <div className="bg-[#FCEEF0] p-8 rounded-2xl w-full lg:w-[45%] md:w-[520px] shadow-sm md:absolute top-8 left-0 z-10 mt-6 md:mt-0">
          <h3 className="font-bold text-xl mb-5 text-gray-900">Find your space now</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Select City</label>
              <InputField
                value={searchValues.city}
                onChange={(val) => setSearchValues({ ...searchValues, city: val })}
                containerClassName="relative bg-white rounded"
                icon={<LocationIcon />}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Select Date</label>
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