import { useState } from "react";

interface BookingCardProps {
  productName?: string;
}

export const BookingCard: React.FC<BookingCardProps> = ({ productName }) => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleBookClick = () => {
    if (selectedDate) {
      alert(`Booking ${productName || "Product"} for date: ${selectedDate}`);
    }
  };

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-6 sticky top-8">
        <p className="text-gray-500 text-sm mb-4">Select date to Book</p>

        <input
          type="text"
          placeholder="Select Date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
        />

        <button
          onClick={handleBookClick}
          disabled={!selectedDate}
          className={`w-full font-medium py-3 rounded-md text-sm transition ${
            selectedDate
              ? "bg-brand text-white hover:bg-brand-dark"
              : "bg-gray-100 text-gray-300 cursor-not-allowed"
          }`}
        >
          Book
        </button>
      </div>
    </div>
  );
};