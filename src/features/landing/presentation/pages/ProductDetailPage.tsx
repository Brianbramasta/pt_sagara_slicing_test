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
import { DateRangePicker } from "../components/shared/DateRangePicker";

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
      
      <div className="bg-brand py-6 px-4 md:px-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[35%]">
            <label className="text-white font-regular mb-1 block">Select Date</label>
          <DateRangePicker value="" />
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-3">
              
            <PhotoGallery images={product.images} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 col-span-3">
            <div className="lg:col-span-2">
              <ProductHeader product={product} />
              <PriceSection product={product} />
              <div className="w-full h-px bg-gray-200/60 my-5"></div>
              <div className="">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Details</h2>
                <p className="text-sm text-gray-500 mb-6">Meeting room with South Jakarta view, with fully amneties and fullboard facilities.</p>
                <div className="w-full h-px bg-gray-200/60 my-2"></div>
              </div>
              <AddOnsSection addOns={product.addOns} />
            </div>
            
            <BookingCard productName={product.title} />
            
          </div>
            
          <div className="lg:col-span-3">
            <LocationSection product={product} />
          </div>
          <div className="lg:col-span-3">

            <SimilarSpacesSection similarSpaces={product.similarSpaces} />
          </div>
            
            
         

          
        </div>
      </main>
    </LandingLayout>
  );
};