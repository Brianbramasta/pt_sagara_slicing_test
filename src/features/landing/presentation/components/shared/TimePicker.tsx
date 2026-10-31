import { useState, useRef, useEffect } from "react";

interface TimePickerProps {
  selectedTime: string;
  onSelect: (time: string) => void;
}

const timeOptions = [
  "09:00", "09:30", "10:00", "10:30", "11:00", 
  "11:30", "12:00", "12:30", "13:00", "13:30"
];

export const TimePicker: React.FC<TimePickerProps> = ({ selectedTime, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <label className="block text-white font-regular mb-1">Select Time</label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white flex items-center border border-gray-200 rounded-md px-3 gap-2 py-2.5 bg-white shadow-sm focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition"
      >
        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span className={selectedTime ? "text-gray-900 font-medium" : "text-gray-400 text-sm font-medium"}>
          {selectedTime || "Select Time"}
        </span>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full mt-3 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 py-3 px-2 max-h-60 overflow-y-auto w-64 text-sm text-gray-700">
          <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-200 z-20"></div>
          {timeOptions.map((time) => (
            <div
              key={time}
              onClick={() => {
                onSelect(time);
                setIsOpen(false);
              }}
              className={`px-4 py-2 rounded-lg cursor-pointer transition ${
                selectedTime === time
                  ? "bg-gray-100 font-semibold text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};