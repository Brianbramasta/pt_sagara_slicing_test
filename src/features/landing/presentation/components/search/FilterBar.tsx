import { useSearchStore } from "../../store/useSearchStore";
import { DropdownSelect, DateRangePicker, LocationIcon } from "../shared";

const cityOptions = [
  { id: "jakarta", label: "Jakarta" },
  { id: "bandung", label: "Bandung" },
  { id: "surabaya", label: "Surabaya" },
  { id: "semarang", label: "Semarang" },
  { id: "medan", label: "Medan" },
  { id: "balikpapan", label: "Balikpapan" },
];

const regionOptions = [
  { id: "all", label: "All", checked: true },
  { id: "south-jakarta", label: "South Jakarta" },
  { id: "north-jakarta", label: "North Jakarta" },
  { id: "central-jakarta", label: "Central Jakarta" },
  { id: "west-jakarta", label: "West Jakarta" },
  { id: "east-jakarta", label: "East Jakarta" },
];

const spaceTypeOptions = [
  { id: "all", label: "All Space", checked: true },
  { id: "offices", label: "Offices" },
  { id: "meeting", label: "Meeting Room" },
  { id: "coworking", label: "Co-working Space" },
  { id: "event", label: "Event Space" },
];

const typeLabelToId: Record<string, string> = {
  "All Space": "all",
  "Offices": "offices",
  "Meeting Room": "meeting",
  "Co-working Space": "coworking",
  "Event Space": "event",
};

const cityLabelToId: Record<string, string> = {
  "Jakarta": "jakarta",
  "Bandung": "bandung",
  "Surabaya": "surabaya",
  "Semarang": "semarang",
  "Medan": "medan",
  "Balikpapan": "balikpapan",
};

const regionLabelToId: Record<string, string> = {
  "All": "all",
  "South Jakarta": "south-jakarta",
  "North Jakarta": "north-jakarta",
  "Central Jakarta": "central-jakarta",
  "West Jakarta": "west-jakarta",
  "East Jakarta": "east-jakarta",
};

export const FilterBar: React.FC = () => {
  const { selectedCity, selectedRegion, selectedType, selectedDate, setType, setDate, setCity, setRegion } = useSearchStore();

  const handleTypeChange = (selectedLabels: string[]) => {
    setType(selectedLabels[0] || "All Space");
  };

  const handleCityChange = (selectedLabels: string[]) => {
    setCity(selectedLabels[0] || "Jakarta");
  };

  const handleRegionChange = (selectedLabels: string[]) => {
    setRegion(selectedLabels[0] || "All");
  };

  const parseFormattedDate = (dateStr: string): { start: string; end: string } => {
    const cleanDate = (ds: string) => ds.replace(/^[A-Za-z]+,?\s+/, "").trim();
    const parts = dateStr.split(" - ");
    if (parts.length === 2) {
      return { start: cleanDate(parts[0]), end: cleanDate(parts[1]) };
    }
    if (parts.length === 1) {
      return { start: cleanDate(parts[0]), end: "" };
    }
    return { start: "", end: "" };
  };

  const formatForStore = (range: { start: string; end: string }): string => {
    if (!range.start) return "";
    if (!range.end) return range.start;
    return `${range.start} - ${range.end}`;
  };

  const handleDateChange = (range: { start: string; end: string }) => {
    setDate(formatForStore(range));
  };

  const selectedTypeIds = [typeLabelToId[selectedType] || "all"];
  const selectedCityIds = [cityLabelToId[selectedCity] || "jakarta"];
  const selectedRegionIds = [regionLabelToId[selectedRegion] || "all"];

  return (
    <div className="rounded-2xl py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
      <div className="col-span-3 lg:col-span-1">
        <DropdownSelect
          label="Select City"
          defaultValue="Jakarta"
          options={cityOptions}
          selectedIds={selectedCityIds}
          onChange={handleCityChange}
          icon={<LocationIcon />}
        />
      </div>

      <div className="col-span-3 lg:col-span-1">
        <DropdownSelect
          label="Select Region"
          defaultValue="All"
          options={regionOptions}
          selectedIds={selectedRegionIds}
          onChange={handleRegionChange}
          icon={<LocationIcon />}
        />
      </div>

      <div className="col-span-3 lg:col-span-1">
        <DropdownSelect
          label="Space Type"
          defaultValue="All Space"
          options={spaceTypeOptions}
          selectedIds={selectedTypeIds}
          onChange={handleTypeChange}
        />
      </div>

      <div className="col-span-3 lg:col-span-2">
        <DateRangePicker
          value={parseFormattedDate(selectedDate)}
          onChange={handleDateChange}
          label="Select Date"
        />
      </div>
    </div>
  );
};