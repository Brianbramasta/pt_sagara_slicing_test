import { useState } from "react";

interface DateRangePickerProps {
  value: { start: string; end: string };
  onChange: (range: { start: string; end: string }) => void;
}

const monthNames = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

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

function getMonthCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  const days: (number | null)[] = [];

  for (let i = firstDay - 1; i > 0; i--) {
    days.push(prevMonthLastDay - i + 1);
  }

  const currentMonthDays = new Date(year, month + 1, 0).getDate();
  for (let i = 1; i <= currentMonthDays; i++) {
    days.push(i);
  }

  return days;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value,
  onChange,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(parseDate(value.start));
  const [endDate, setEndDate] = useState<Date | null>(parseDate(value.end));
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const updateRange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      onChange({
        start: formatDate(start),
        end: formatDate(end),
      });
    }
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (!startDate) {
      updateRange(newDate, null);
    } else if (!endDate) {
      if (newDate >= startDate) {
        updateRange(startDate, newDate);
      }
    } else {
      updateRange(newDate, null);
    }
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const isInRange = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (!startDate) return false;
    if (!endDate) return date.getTime() === startDate.getTime();
    return date.getTime() >= startDate.getTime() && date.getTime() <= endDate.getTime();
  };

  const monthYear = monthNames[currentMonth.getMonth()] + " " + currentMonth.getFullYear();

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white rounded-lg flex items-center px-3 py-2.5 text-sm focus:outline-none hover:border-gray-300 transition"
      >
        <span className="text-gray-400 mr-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.8125 21.5837C4.42917 21.5837 4.09375 21.4399 3.80625 21.1524C3.51875 20.8649 3.375 20.5295 3.375 20.1462V5.29199C3.375 4.90866 3.51875 4.57324 3.80625 4.28574C4.09375 3.99824 4.42917 3.85449 4.8125 3.85449H6.36979V3.18366C6.36979 2.96644 6.44325 2.78435 6.59021 2.63741C6.73717 2.49046 6.91925 2.41699 7.13646 2.41699C7.36037 2.41699 7.54816 2.49046 7.69972 2.63741C7.85128 2.78435 7.92708 2.96644 7.92708 3.18366V3.85449H16.0729V3.18366C16.0729 2.96644 16.1464 2.78435 16.2933 2.63741C16.4403 2.49046 16.6224 2.41699 16.8396 2.41699C17.0637 2.41699 17.2514 2.49046 17.4028 2.63741C17.5544 2.78435 17.6302 2.96644 17.6302 3.18366V3.85449H19.1875C19.5708 3.85449 19.9062 3.99824 20.1938 4.28574C20.4813 4.57324 20.625 4.90866 20.625 5.29199V20.1462C20.625 20.5295 20.4813 20.8649 20.1938 21.1524C19.9062 21.4399 19.5708 21.5837 19.1875 21.5837H4.8125ZM4.8125 20.1462H19.1875V9.84408H4.8125V20.1462ZM4.8125 8.40658H19.1875V5.29199H4.8125V8.40658ZM12 13.917C11.7285 13.917 11.5009 13.8251 11.3172 13.6415C11.1335 13.4578 11.0417 13.2302 11.0417 12.9587C11.0417 12.6871 11.1335 12.4595 11.3172 12.2758C11.5009 12.0922 11.7285 12.0003 12 12.0003C12.2715 12.0003 12.4991 12.0922 12.6828 12.2758C12.8665 12.4595 12.9583 12.6871 12.9583 12.9587C12.9583 13.2302 12.8665 13.4578 12.6828 13.6415C12.4991 13.8251 12.2715 13.917 12 13.917ZM8.16667 13.917C7.89512 13.917 7.66752 13.8251 7.48385 13.6415C7.30019 13.4578 7.20833 13.2302 7.20833 12.9587C7.20833 12.6871 7.30019 12.4595 7.48385 12.2758C7.66752 12.0922 7.89512 12.0003 8.16667 12.0003C8.43821 12.0003 8.66581 12.0922 8.84948 12.2758C9.03314 12.4595 9.125 12.6871 9.125 12.9587C9.125 13.2302 9.03314 13.4578 8.84948 13.6415C8.66581 13.8251 8.43821 13.917 8.16667 13.917ZM15.8333 13.917C15.5618 13.917 15.3342 13.8251 15.1505 13.6415C14.9669 13.4578 14.875 13.2302 14.875 12.9587C14.875 12.6871 14.9669 12.4595 15.1505 12.2758C15.3342 12.0922 15.5618 12.0003 15.8333 12.0003C16.1049 12.0003 16.3325 12.0922 16.5161 12.2758C16.6998 12.4595 16.7917 12.6871 16.7917 12.9587C16.7917 13.2302 16.6998 13.4578 16.5161 13.6415C16.3325 13.8251 16.1049 13.917 15.8333 13.917ZM12 17.7503C11.7285 17.7503 11.5009 17.6585 11.3172 17.4748C11.1335 17.2911 11.0417 17.0635 11.0417 16.792C11.0417 16.5204 11.1335 16.2928 11.3172 16.1092C11.5009 15.9255 11.7285 15.8337 12 15.8337C12.2715 15.8337 12.4991 15.9255 12.6828 16.1092C12.8665 16.2928 12.9583 16.5204 12.9583 16.792C12.9583 17.0635 12.8665 17.2911 12.6828 17.4748C12.4991 17.6585 12.2715 17.7503 12 17.7503ZM8.16667 17.7503C7.89512 17.7503 7.66752 17.6585 7.48385 17.4748C7.30019 17.2911 7.20833 17.0635 7.20833 16.792C7.20833 16.5204 7.30019 16.2928 7.48385 16.1092C7.66752 15.9255 7.89512 15.8337 8.16667 15.8337C8.43821 15.8337 8.66581 15.9255 8.84948 16.1092C9.03314 16.2928 9.125 16.5204 9.125 16.792C9.125 17.0635 9.03314 17.2911 8.84948 17.4748C8.66581 17.6585 8.43821 17.7503 8.16667 17.7503ZM15.8333 17.7503C15.5618 17.7503 15.3342 17.6585 15.1505 17.4748C14.9669 17.2911 14.875 17.0635 14.875 16.792C14.875 16.5204 14.9669 16.2928 15.1505 16.1092C15.3342 15.9255 15.5618 15.8337 15.8333 15.8337C16.1049 15.8337 16.3325 15.9255 16.5161 16.1092C16.6998 16.2928 16.7917 16.5204 16.7917 16.792C16.7917 17.0635 16.6998 17.2911 16.5161 17.4748C16.3325 17.6585 16.1049 17.7503 15.8333 17.7503Z" fill="url(#paint0_linear_1_23219)"/>
<defs>
<linearGradient id="paint0_linear_1_23219" x1="12" y1="2.41699" x2="12" y2="21.5837" gradientUnits="userSpaceOnUse">
<stop stop-color="#843030"/>
<stop offset="1" stop-color="#BE4444"/>
</linearGradient>
</defs>
</svg>
</span>
        <span className="text-gray-800 text-xs">
          {value.start && value.end ? `${value.start} - ${value.end}` : "Pilih tanggal"}
        </span>
        <svg className={`w-4 h-4 ml-auto transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-3">
          <div className="flex justify-between items-center mb-3">
            <button type="button" onClick={prevMonth} className="text-xs">‹</button>
            <span className="text-sm font-medium">{monthYear}</span>
            <button type="button" onClick={nextMonth} className="text-xs">›</button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="text-xs text-center text-gray-400 font-medium">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {getMonthCalendar(currentMonth.getFullYear(), currentMonth.getMonth()).map((day, idx) => {
              if (day === null) return <div key={`empty-${idx}`} className="w-8 h-8"></div>;

              const inRange = isInRange(day);

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDateClick(day)}
                  className={`h-8 w-8 rounded-full text-xs flex items-center justify-center transition ${
                    inRange ? "bg-brand text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {startDate && (
            <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
              Dipilih: {formatDate(startDate)} {endDate && `- ${formatDate(endDate)}`}
            </div>
          )}
        </div>
      )}
    </div>
  );
};