import * as React from 'react';
import { DateRangePicker } from './shared';
import { TimePicker } from './shared/TimePicker';

interface IAppProps {
    selectedDate: string;
    setSelectedDate: (date: string) => void;
    selectedTime: string;
    setSelectedTime: (time: string) => void;
}

export const SearchSection: React.FunctionComponent<IAppProps> = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) => {
  return (
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 lg:col-span-1">
              <label className="text-white font-regular mb-1 block">Select Date</label>
              <DateRangePicker 
                value={selectedDate} 
                onChange={(range) => setSelectedDate(range.start)}
              />
            </div>
            {selectedDate && (
              <div className="col-span-2 lg:col-span-1">
                <TimePicker 
                  selectedTime={selectedTime}
                  onSelect={setSelectedTime}
                />
              </div>
            )}
          </div>
        </div>

  );
};

