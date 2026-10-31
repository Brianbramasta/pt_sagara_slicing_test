import { useState, useRef, useEffect } from "react";

interface DateRangePickerProps {
  value: { start: string; end: string } | string;
  onChange?: (range: { start: string; end: string }) => void;
  label?: string;
  readOnly?: boolean;
}

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(date: Date): string {
  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

function parseDate(dateStr: string): Date | null {
  if (!dateStr) return null;
  const parts = dateStr.split(" ");
  if (parts.length < 3) return null;
  const day = parseInt(parts[0]);
  const monthName = parts[1];
  const year = parseInt(parts[2]);
  const monthIndex = monthNames.indexOf(monthName);
  if (monthIndex === -1) return null;
  return new Date(year, monthIndex, day);
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getCalendarDays(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const adjustedFirstDay = (firstDay + 6) % 7;
  const days: (number | null)[] = [];

  const prevMonthDays = getDaysInMonth(year, (month - 1 + 12) % 12);
  for (let i = adjustedFirstDay - 1; i > 0; i--) {
    days.push(prevMonthDays - i + 1);
  }

  const currentMonthDays = getDaysInMonth(year, month);
  for (let i = 1; i <= currentMonthDays; i++) {
    days.push(i);
  }

  const totalRendered = adjustedFirstDay + currentMonthDays;
  const nextDays = (7 - (totalRendered % 7)) % 7;
  for (let i = 1; i <= nextDays; i++) {
    days.push(null);
  }

  return days;
}

function CalendarDays({
  year,
  month,
  startDate,
  endDate,
  onDateClick,
  isFirstCalendar = true,
}: {
  year: number;
  month: number;
  startDate: Date | null;
  endDate: Date | null;
  onDateClick: (day: number, isEnd: boolean) => void;
  isFirstCalendar?: boolean;
}) {
  const days = getCalendarDays(year, month);

  const getCellStyle = (day: number | null, date: Date) => {
    if (day === null) return "text-gray-300 cursor-default";

    const inRange = startDate && endDate && date >= startDate && date <= endDate;
    const isStart = startDate && date.getTime() === startDate.getTime() && (!endDate || date <= endDate);
    const isEnd = endDate && date.getTime() === endDate.getTime();

    if (inRange) return "bg-brand text-white font-bold relative";
    if (isStart) return "border-2 border-brand text-brand font-bold";
    if (isEnd) return "bg-brand text-white font-bold";

    return "hover:bg-gray-100 text-gray-700";
  };

  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map((day, idx) => {
        if (day === null) return <div key={`empty-${idx}-${month}`} className="w-8 h-8" />;
        const date = new Date(year, month, day);
        return (
          <button
            key={`${day}-${month}-${idx}`}
            type="button"
            onClick={() => onDateClick(day, !isFirstCalendar)}
            className={`h-8 w-8 rounded-full text-xs flex items-center justify-center transition ${getCellStyle(day, date)}`}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({ value, onChange, label, readOnly = false }) => {
  const isStringValue = typeof value === "string";
  const dateObject = isStringValue ? { start: value, end: "" } : value;
  const [startDate, setStartDate] = useState<Date | null>(parseDate(dateObject.start));
  const [endDate, setEndDate] = useState<Date | null>(parseDate(dateObject.end));
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (readOnly && isStringValue) {
      const parts = value.split(" - ");
      if (parts.length === 2) {
        setStartDate(parseDate(parts[0]));
        setEndDate(parseDate(parts[1]));
      }
    }
  }, [value, readOnly, isStringValue]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDateClick = (day: number, isEnd: boolean) => {
    const monthOffset = isEnd ? 1 : 0;
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + monthOffset, day);
    const dateStr = formatDate(clickedDate);

    if (isEnd) {
      if (!startDate) {
        setStartDate(clickedDate);
        setEndDate(null);
        if (onChange) onChange({ start: dateStr, end: "" });
      } else {
        const newEnd = clickedDate < startDate ? startDate : clickedDate;
        const newStart = clickedDate < startDate ? newEnd : startDate;
        setStartDate(newStart);
        setEndDate(newEnd);
        if (onChange) onChange({ start: formatDate(newStart), end: formatDate(newEnd) });
      }
    } else {
      if (!startDate || (startDate && endDate)) {
        setStartDate(clickedDate);
        setEndDate(null);
        if (onChange) onChange({ start: dateStr, end: "" });
      } else {
        if (clickedDate < startDate) {
          setStartDate(clickedDate);
          if (onChange) onChange({ start: dateStr, end: "" });
        } else {
          setEndDate(clickedDate);
          if (onChange) onChange({ start: formatDate(startDate), end: dateStr });
        }
      }
    }
  };

  const handlePresetClick = (days: number) => {
    const start = new Date();
    const end = new Date();
    end.setDate(start.getDate() + days - 1);
    const startMonth = new Date(start.getFullYear(), start.getMonth(), 1);
    setCurrentMonth(startMonth);
    setStartDate(start);
    setEndDate(end);
    if (onChange) onChange({ start: formatDate(start), end: formatDate(end) });
  };

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const leftMonth = month;
  const rightMonth = month + 1;
  const rightYear = month === 11 ? year + 1 : year;

  const displayStart = startDate ? formatDate(startDate) : "Pilih tanggal";
  const displayEnd = endDate ? formatDate(endDate) : "";
  const combinedDisplay = startDate && endDate ? `${displayStart} - ${displayEnd}` : displayStart;

  if (readOnly) {
    return (
      <div className="flex items-center border border-gray-200 rounded-md px-3 py-2.5 bg-white shadow-sm">
        <svg
          className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0"
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
        <span className="text-sm text-gray-800">{combinedDisplay}</span>
      </div>
    );
  }

  return (
    <div className="inline-flex flex-col w-full ">
      {label && <label className="block text-gray-700 text-sm font-medium mb-2">{label}</label>}
      <div ref={containerRef} className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white flex items-center border border-gray-200 rounded-md px-3 gap-2 py-2 bg-white shadow-sm focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition"
        >
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.8125 21.5837C4.42917 21.5837 4.09375 21.4399 3.80625 21.1524C3.51875 20.8649 3.375 20.5295 3.375 20.1462V5.29199C3.375 4.90866 3.51875 4.57324 3.80625 4.28574C4.09375 3.99824 4.42917 3.85449 4.8125 3.85449H6.36979V3.18366C6.36979 2.96644 6.44325 2.78435 6.59021 2.63741C6.73717 2.49046 6.91925 2.41699 7.13646 2.41699C7.36037 2.41699 7.54816 2.49046 7.69972 2.63741C7.85128 2.78435 7.92708 2.96644 7.92708 3.18366V3.85449H16.0729V3.18366C16.0729 2.96644 16.1464 2.78435 16.2933 2.63741C16.4403 2.49046 16.6224 2.41699 16.8396 2.41699C17.0637 2.41699 17.2514 2.49046 17.4028 2.63741C17.5544 2.78435 17.6302 2.96644 17.6302 3.18366V3.85449H19.1875C19.5708 3.85449 19.9062 3.99824 20.1938 4.28574C20.4813 4.57324 20.625 4.90866 20.625 5.29199V20.1462C20.625 20.5295 20.4813 20.8649 20.1938 21.1524C19.9062 21.4399 19.5708 21.5837 19.1875 21.5837H4.8125ZM4.8125 20.1462H19.1875V9.84408H4.8125V20.1462ZM4.8125 8.40658H19.1875V5.29199H4.8125V8.40658ZM12 13.917C11.7285 13.917 11.5009 13.8251 11.3172 13.6415C11.1335 13.4578 11.0417 13.2302 11.0417 12.9587C11.0417 12.6871 11.1335 12.4595 11.3172 12.2758C11.5009 12.0922 11.7285 12.0003 12 12.0003C12.2715 12.0003 12.4991 12.0922 12.6828 12.2758C12.8665 12.4595 12.9583 12.6871 12.9583 12.9587C12.9583 13.2302 12.8665 13.4578 12.6828 13.6415C12.4991 13.8251 12.2715 13.917 12 13.917ZM8.16667 13.917C7.89512 13.917 7.66752 13.8251 7.48385 13.6415C7.30019 13.4578 7.20833 13.2302 7.20833 12.9587C7.20833 12.6871 7.30019 12.4595 7.48385 12.2758C7.66752 12.0922 7.89512 12.0003 8.16667 12.0003C8.43821 12.0003 8.66581 12.0922 8.84948 12.2758C9.03314 12.4595 9.125 12.6871 9.125 12.9587C9.125 13.2302 9.03314 13.4578 8.84948 13.6415C8.66581 13.8251 8.43821 13.917 8.16667 13.917ZM15.8333 13.917C15.5618 13.917 15.3342 13.8251 15.1505 13.6415C14.9669 13.4578 14.875 13.2302 14.875 12.9587C14.875 12.6871 14.9669 12.4595 15.1505 12.2758C15.3342 12.0922 15.5618 12.0003 15.8333 12.0003C16.1049 12.0003 16.3325 12.0922 16.5161 12.2758C16.6998 12.4595 16.7917 12.6871 16.7917 12.9587C16.7917 13.2302 16.6998 13.4578 16.5161 13.6415C16.3325 13.8251 16.1049 13.917 15.8333 13.917ZM12 17.7503C11.7285 17.7503 11.5009 17.6585 11.3172 17.4748C11.1335 17.2911 11.0417 17.0635 11.0417 16.792C11.0417 16.5204 11.1335 16.2928 11.3172 16.1092C11.5009 15.9255 11.7285 15.8337 12 15.8337C12.2715 15.8337 12.4991 15.9255 12.6828 16.1092C12.8665 16.2928 12.9583 16.5204 12.9583 16.792C12.9583 17.0635 12.8665 17.2911 12.6828 17.4748C12.4991 17.6585 12.2715 17.7503 12 17.7503ZM8.16667 17.7503C7.89512 17.7503 7.66752 17.6585 7.48385 17.4748C7.30019 17.2911 7.20833 17.0635 7.20833 16.792C7.20833 16.5204 7.30019 16.2928 7.48385 16.1092C7.66752 15.9255 7.89512 15.8337 8.16667 15.8337C8.43821 15.8337 8.66581 15.9255 8.84948 16.1092C9.03314 16.2928 9.125 16.5204 9.125 16.792C9.125 17.0635 9.03314 17.2911 8.84948 17.4748C8.66581 17.6585 8.43821 17.7503 8.16667 17.7503ZM15.8333 17.7503C15.5618 17.7503 15.3342 17.6585 15.1505 17.4748C14.9669 17.2911 14.875 17.0635 14.875 16.792C14.875 16.5204 14.9669 16.2928 15.1505 16.1092C15.3342 15.9255 15.5618 15.8337 15.8333 15.8337C16.1049 15.8337 16.3325 15.9255 16.5161 16.1092C16.6998 16.2928 16.7917 16.5204 16.7917 16.792C16.7917 17.0635 16.6998 17.2911 16.5161 17.4748C16.3325 17.6585 16.1049 17.7503 15.8333 17.7503Z" fill="url(#paint0_linear_1_23219)"/>
<defs>
<linearGradient id="paint0_linear_1_23219" x1="12" y1="2.41699" x2="12" y2="21.5837" gradientUnits="userSpaceOnUse">
<stop stop-color="#843030"/>
<stop offset="1" stop-color="#BE4444"/>
</linearGradient>
</defs>
</svg>
          <span className={`text-sm font-medium ${combinedDisplay === "Pilih tanggal" ? "text-gray-400" : "text-gray-800"}`}>{combinedDisplay}</span>
         
        </div>

        {isOpen && (
          <div className="absolute left-0 top-full mt-3 z-[9999] w-[620px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 text-gray-700">
            <div className="grid grid-cols-2 gap-8 pb-4 border-b border-gray-100">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-4 px-1">
                  <div className="flex items-center gap-2">
                    <button onClick={prevMonth} className="text-gray-400 hover:text-gray-700 font-bold">&lsaquo;</button>
                    <button onClick={prevMonth} className="text-gray-400 hover:text-gray-700 font-bold text-sm">&laquo;</button>
                  </div>
                  <span className="text-gray-800 font-bold text-sm">{monthNames[leftMonth]} {year}</span>
                  <div className="w-8" />
                </div>
                <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 mb-2">
                  <span>Mon</span><span>Tue</span><span>Wen</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
                <CalendarDays
                  year={year}
                  month={leftMonth}
                  startDate={startDate}
                  endDate={endDate}
                  onDateClick={handleDateClick}
                  isFirstCalendar={true}
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-4 px-1">
                  <div className="w-8" />
                  <span className="text-gray-800 font-bold text-sm">{monthNames[rightMonth]} {rightYear}</span>
                  <div className="flex items-center gap-2">
                    <button onClick={nextMonth} className="text-gray-400 hover:text-gray-700 font-bold">&rsaquo;</button>
                    <button onClick={nextMonth} className="text-gray-400 hover:text-gray-700 font-bold text-sm">&raquo;</button>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 mb-2">
                  <span>Mon</span><span>Tue</span><span>Wen</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
                <CalendarDays
                  year={rightMonth === 12 ? year + 1 : year}
                  month={rightMonth === 12 ? 0 : rightMonth}
                  startDate={startDate}
                  endDate={endDate}
                  onDateClick={handleDateClick}
                  isFirstCalendar={false}
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {[1, 7, 14, 30].map(days => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => handlePresetClick(days)}
                    className="px-3 py-1.5 text-xs font-medium text-gray-500 border border-gray-200 rounded-full hover:border-gray-300 transition"
                  >
                    {days} Day{days > 1 ? 's' : ''}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-brand hover:bg-red-900 text-white font-medium text-xs px-4 py-2 rounded-lg transition shadow-sm cursor-pointer"
              >
                Apply Date
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateRangePicker;