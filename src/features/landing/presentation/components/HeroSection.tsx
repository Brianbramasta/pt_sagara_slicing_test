import { useState } from "react";
import { DropdownSelect, DateRangePicker } from "./shared";

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

  const handleSearch = () => {
    console.log("Search:", searchValues);
  };

  const handleSpaceTypeChange = (selectedLabels: string[]) => {
    setSearchValues((prev) => ({ ...prev, spaceType: selectedLabels[0] || "All Space" }));
  };

  const handleDateChange = (range: { start: string; end: string }) => {
    setSearchValues((prev) => ({ ...prev, date: range }));
  };

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
                <span className="text-gray-400 mr-2 text-sm">📍</span>
                <input
                  type="text"
                  value={searchValues.city}
                  onChange={(e) => setSearchValues({ ...searchValues, city: e.target.value })}
                  className="w-full bg-transparent text-sm focus:outline-none text-gray-800"
                />
              </div>
            </div>
            <div>
              <DateRangePicker
                value={searchValues.date}
                onChange={handleDateChange}
              />
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
                className="bg-[#8B2635] text-white px-8 py-2 rounded text-sm font-medium hover:bg-[#6E1D29] transition"
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