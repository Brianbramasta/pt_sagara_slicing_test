import { useState, useRef, useEffect } from "react";

interface DropdownOption {
  id: string;
  label: string;
  checked?: boolean;
}

interface DropdownSelectProps {
  label: string;
  defaultValue?: string;
  options: DropdownOption[];
  selectedIds?: string[];
  onChange?: (selectedLabels: string[]) => void;
}

export const DropdownSelect: React.FC<DropdownSelectProps> = ({
  label,
  defaultValue = "All Space",
  options,
  selectedIds = [],
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<string[]>(selectedIds);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (onChange) {
      const selectedLabels = options
        .filter((opt) => internalSelected.includes(opt.id))
        .map((opt) => opt.label);
      onChange(
        selectedLabels.length > 0 ? selectedLabels : [defaultValue]
      );
    }
  }, [internalSelected, options, onChange, defaultValue]);

  const toggleOption = (id: string) => {
    setInternalSelected((prev) => {
      const newSelected = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      return newSelected;
    });
    if (onChange) {
      const selectedLabels = options
        .filter((opt) => internalSelected.includes(opt.id))
        .map((opt) => opt.label);
      onChange(
        selectedLabels.length > 0 ? selectedLabels : [defaultValue]
      );
    }
  };

  const displayLabel =
    options
      .filter((opt) => internalSelected.includes(opt.id))
      .map((opt) => opt.label)
      .join(", ") || defaultValue;

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-xs font-medium text-gray-700 mb-1.5">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white rounded-lg flex justify-between items-center px-3 py-2.5 shadow-sm focus:outline-none border border-transparent hover:border-gray-200 transition text-gray-800 text-sm"
      >
        <div className="flex items-center">
          <svg className="w-5 h-5 text-brand mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
            <path d="M9 3v18"></path>
            <path d="M14 12h.01"></path>
          </svg>
          <span className="text-gray-800 text-sm">{displayLabel}</span>
        </div>
        <svg className={`w-4 h-4 ml-auto transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => toggleOption(option.id)}
              className={`w-full flex items-center px-3 py-2 text-left text-sm hover:bg-gray-50 transition ${
                internalSelected.includes(option.id) ? "bg-brand-light" : ""
              }`}
            >
              <div className="relative flex items-center justify-center w-4 h-4 mr-3">
                <input
                  type="checkbox"
                  checked={internalSelected.includes(option.id)}
                  readOnly
                  className="peer appearance-none w-4 h-4 border-2 border-brand rounded bg-white checked:bg-brand checked:border-brand cursor-pointer"
                />
                <svg
                  className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className={internalSelected.includes(option.id) ? "text-brand font-medium" : "text-gray-700"}>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};