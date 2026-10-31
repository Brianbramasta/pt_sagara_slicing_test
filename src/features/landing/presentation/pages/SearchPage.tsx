import { AllSpacesSection, MapSection, OtherSpacesSection } from "../components";
import { FilterBar } from "../components/search/FilterBar";
import { LandingLayout } from "../layout";

export const SearchPage: React.FC = () => {
  return (
    <LandingLayout>
      <div className=" text-gray-800 font-sans antialiased overflow-x-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="flex flex-col lg:flex-row min-h-screen">
          <div className="w-full grid grid-cols-2 gap-8 overflow-y-auto">
            <div className="col-span-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Search Results</h1>
              <FilterBar />
              <AllSpacesSection />
            </div>
            <div className="col-span-1">
              <MapSection />
            </div>
            <div className="col-span-2">
              <OtherSpacesSection />
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};