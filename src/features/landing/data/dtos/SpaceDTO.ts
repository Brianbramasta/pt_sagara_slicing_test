export interface SpaceDTO {
  id: string;
  title: string;
  location: string;
  image: string;
  capacity: number;
  type: string;
  daily_price: string;
  hourly_price: string;
  similarSpaces: SimilarSpaceDTO[];
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