export interface SimilarSpace {
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

export interface Space {
  id: string;
  title: string;
  location: string;
  image: string;
  capacity: number;
  type: string;
  dailyPrice: string;
  hourlyPrice: string;
  similarSpaces: SimilarSpace[];
}