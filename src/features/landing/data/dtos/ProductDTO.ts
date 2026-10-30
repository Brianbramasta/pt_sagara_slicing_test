export interface ProductDTO {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string;
  address: string;
  images: ProductImageDTO[];
  capacity: number;
  prices: ProductPriceDTO[];
  rating: number;
  ratingCount: number;
  addOns: AddOnDTO[];
  similarSpaces: SimilarSpaceDTO[];
}

export interface ProductImageDTO {
  id: string;
  url: string;
  isMain: boolean;
}

export interface ProductPriceDTO {
  period: string;
  price: string;
  isBestDeal: boolean;
}

export interface AddOnDTO {
  id: string;
  title: string;
  price: string;
  unit: string;
}

export interface SimilarSpaceDTO {
  id: string;
  title: string;
  type: string;
  typeColor: string;
  icon: string;
  people: number;
  pricePeriod: string;
  price: string;
  hourlyPrice?: string;
  hasDiscount: boolean;
  imageSrc: string;
}