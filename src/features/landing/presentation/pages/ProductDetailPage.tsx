import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { LandingLayout } from "../layout/LandingLayout";
import { useProductQuery } from "../hooks/useProductQuery";
import { ProductHeader } from "../components/ProductHeader";
import { PhotoGallery } from "../components/PhotoGallery";
import { PriceSection } from "../components/PriceSection";
import { BookingCard } from "../components/BookingCard";
import { AddOnsSection } from "../components/AddOnsSection";
import { LocationSection } from "../components/LocationSection";
import { SimilarSpacesSection } from "../components/SimilarSpacesSection";

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const productId = id || searchParams.get("id");

  const { data: product, isLoading, error } = useProductQuery(productId || "1");

  useEffect(() => {
    if (!product && !isLoading) {
      navigate("/", { replace: true });
    }
  }, [product, isLoading, navigate]);

  if (isLoading) {
    return (
      <LandingLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto"></div>
            <p className="mt-4 text-gray-500">Loading product details...</p>
          </div>
        </div>
      </LandingLayout>
    );
  }

  if (error || !product) {
    return (
      <LandingLayout>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500">Product not found</p>
        </div>
      </LandingLayout>
    );
  }

  return (
    <LandingLayout>
      <ProductHeader product={product} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <PhotoGallery images={product.images} />

            <PriceSection product={product} />

            <AddOnsSection addOns={product.addOns} />

            <LocationSection product={product} />

            <SimilarSpacesSection similarSpaces={product.similarSpaces} />
          </div>

          <BookingCard productName={product.title} />
        </div>
      </main>
    </LandingLayout>
  );
};