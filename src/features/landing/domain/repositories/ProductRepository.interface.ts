import { Product } from "../entities/Product";

export interface IProductRepository {
  getProductById(id: string): Promise<Product>;
}