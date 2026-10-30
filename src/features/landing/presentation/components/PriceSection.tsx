import { Product } from "../../domain/entities/Product";

interface PriceSectionProps {
  product: Product;
}

export const PriceSection: React.FC<PriceSectionProps> = ({ product }) => {
  const getPriceLabel = (period: string) => {
    switch (period) {
      case "hourly":
        return "Hourly";
      case "daily":
        return "Daily";
      case "weekly":
        return "Weekly";
      case "monthly":
        return "Monthly";
      default:
        return period;
    }
  };

  const mainPrice = product.prices.find((p) => p.isBestDeal);

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Price</h2>

      <div className="bg-brand-light border border-gray-100/50 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">{getPriceLabel(mainPrice?.period || "daily")}</span>
            <span className="text-xl font-bold text-brand">{mainPrice?.price || "Rp2,400,000"}</span>
          </div>
          {mainPrice?.isBestDeal && (
            <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
              Best Deal
            </span>
          )}
        </div>

        <div className="w-full h-px bg-gray-200/60 mb-5"></div>

        <div className="space-y-3">
          {product.prices
            .filter((p) => !p.isBestDeal)
            .map((p) => (
              <div key={p.period} className="flex items-center gap-4">
                <span className="text-gray-400 text-xs w-14">{getPriceLabel(p.period)}</span>
                <span className="text-sm font-semibold text-gray-800">{p.price}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};