import { Space } from "../../domain/entities/Space";

interface SpaceCardProps {
  space: Space;
}

export const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <div className="relative h-36 rounded-xl overflow-hidden mb-2.5">
          <img src={space.image} alt={space.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-gray-900 text-xs">{space.title}</h3>
          <span className="text-[9px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{space.capacity} People</span>
        </div>
        <p className="text-[10px] text-brand flex items-center gap-1 mb-2">{space.type}</p>
      </div>
      <div className="pt-2.5 border-t border-gray-100 flex justify-between items-end">
        <div>
          <span className="text-[9px] text-gray-400 block">Daily</span>
          <span className="text-xs font-bold text-brand">{space.dailyPrice}</span>
        </div>
        <span className="text-[9px] text-gray-400">Hourly {space.hourlyPrice}</span>
      </div>
    </div>
  );
};