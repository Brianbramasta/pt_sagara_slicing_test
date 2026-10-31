import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer?: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-gray-100 py-5">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-medium text-gray-900 text-sm">{question}</span>
        <span className={`text-gray-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-out ${expanded ? "max-h-40" : "max-h-0"}`}>
        {expanded && answer && (
          <div className="mt-3 text-xs text-gray-500 leading-relaxed pr-8">{answer}</div>
        )}
      </div>
    </div>
  );
};