interface StatsCardProps {
  icon: string;
  value: string;
  label: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label }) => {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl opacity-60 border border-gray-200 rounded p-1">{icon}</span>
        <span className="text-3xl font-bold text-gray-900">{value}</span>
      </div>
      <p className="text-xs text-gray-400 font-medium ml-12">{label}</p>
    </>
  );
};