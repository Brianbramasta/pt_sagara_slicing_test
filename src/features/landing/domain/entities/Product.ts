export interface Product {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string;
  address: string;
  images: ProductImage[];
  capacity: number;
  prices: ProductPrice[];
  rating: number;
  ratingCount: number;
  addOns: AddOn[];
  similarSpaces: SimilarSpace[];
}

export interface ProductImage {
  id: string;
  url: string;
  isMain: boolean;
}

export interface ProductPrice {
  period: 'hourly' | 'daily' | 'weekly' | 'monthly';
  price: string;
  isBestDeal: boolean;
}

export interface AddOn {
  id: string;
  title: string;
  price: string;
  unit: string;
}

export interface SimilarSpace {
  id: string;
  title: string;
  type: string;
  typeColor: string;
  icon?: string | React.ReactNode;
  people: number;
  pricePeriod: string;
  price: string;
  priceDiscount?: string;
  hourlyPrice?: string;
  hasDiscount?: boolean;
  imageSrc: string;
}