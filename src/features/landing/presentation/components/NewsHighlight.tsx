export const NewsHighlight: React.FC = () => {
  return (
    <div className="relative h-full min-h-[450px] rounded-lg overflow-hidden group cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
        alt="News Highlight"
        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      <div className="absolute top-6 left-6 border border-white/60 text-white text-[10px] font-bold px-3 py-1 tracking-wider bg-black/20 backdrop-blur-sm">
        TIPS
      </div>

      <div className="absolute bottom-8 left-8 right-8">
        <p className="text-white/80 text-xs mb-2">Debits - 03 June 2023</p>
        <h3 className="text-white text-3xl font-bold leading-tight">
          Minimal workspace for<br />inspirations
        </h3>
      </div>
    </div>
  );
};