interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label }) => {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl opacity-60  rounded p-1" style={{ zoom: '70%' }}>
          {icon}
        </span>
        <span className="text-3xl font-bold text-[#10375C]">{value}</span>
      </div>
      <p className="text-xs text-gray-400 font-medium ml-12">{label}</p>
    </>
  );
};