import { useSearchStore } from "../../store/useSearchStore";

export const FilterBar: React.FC = () => {
  const { selectedCity, selectedRegion, selectedType, selectedDate } = useSearchStore();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
      <div>
        <label className="block text-[11px] font-semibold text-gray-400 mb-1">Select City</label>
        <div className="flex items-center justify-between border-b border-gray-200 pb-1.5 cursor-pointer">
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-800">
            <span className="text-brand">📍</span>
            <span>{selectedCity}</span>
          </div>
          <span className="text-gray-400 text-[10px]">▼</span>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-semibold text-gray-400 mb-1">Select Region</label>
        <div className="flex items-center justify-between border-b border-gray-200 pb-1.5 cursor-pointer">
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-800">
            <span className="text-brand">📍</span>
            <span>{selectedRegion}</span>
          </div>
          <span className="text-gray-400 text-[10px]">▼</span>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-semibold text-gray-400 mb-1">Space Type</label>
        <div className="flex items-center justify-between border-b border-gray-200 pb-1.5 cursor-pointer">
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-800">
            <span className="text-brand">🏢</span>
            <span>{selectedType}</span>
          </div>
          <span className="text-gray-400 text-[10px]">▼</span>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-semibold text-gray-400 mb-1">Select Date</label>
        <div className="border border-gray-200 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 text-[11px] font-medium text-gray-700 bg-gray-50/50 cursor-pointer">
          <span className="text-brand">📅</span>
          <span className="truncate">{selectedDate}</span>
        </div>
      </div>
    </div>
  );
};