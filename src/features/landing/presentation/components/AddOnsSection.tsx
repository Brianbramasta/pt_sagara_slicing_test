import { AddOn } from "../../domain/entities/Product";
import { IconCube } from "./Icons";

interface AddOnsSectionProps {
  addOns: AddOn[];
}

const getAddOnIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("corkage")) {
    return (
      <svg className="w-5 h-5 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 01-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
      </svg>
    );
  }
  if (lowerTitle.includes("lunch")) {
    return (
      <svg className="w-5 h-5 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
      </svg>
    );
  }
  if (lowerTitle.includes("coffee")) {
    return (
      <svg className="w-5 h-5 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
      </svg>
    );
  }
  if (lowerTitle.includes("flip chart")) {
    return (
      <svg className="w-5 h-5 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    );
  }
  if (lowerTitle.includes("projector") || lowerTitle.includes("lcd") || lowerTitle.includes("led")) {
    return (
      <svg className="w-5 h-5 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
      </svg>
    );
  }
  return <IconCube />;
};

export const AddOnsSection: React.FC<AddOnsSectionProps> = ({ addOns }) => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Add Ons</h2>
      <p className="text-sm text-gray-500 mb-6">
        Enhance your booking experience with a variety of add-ons, including catering, equipment rentals, and personalized services.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {addOns.map((addOn) => (
          <div
            key={addOn.id}
            className="border border-gray-100 rounded-lg p-4 hover:border-brand transition group cursor-pointer shadow-sm hover:shadow"
          >
            {getAddOnIcon(addOn.title)}
            <h3 className="text-xs font-medium text-gray-700 mb-1">{addOn.title}</h3>
            <p className="text-sm font-bold text-gray-900">
              {addOn.price} <span className="text-[10px] text-gray-400 font-normal">{addOn.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};