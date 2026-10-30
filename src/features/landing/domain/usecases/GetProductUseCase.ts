import { IProductRepository } from "../repositories/ProductRepository.interface";
import { Product } from "../entities/Product";

export class GetProductUseCase {
  constructor(private productRepo: IProductRepository) {}

  async execute(id: string): Promise<Product> {
    return await this.productRepo.getProductById(id);
  }
}