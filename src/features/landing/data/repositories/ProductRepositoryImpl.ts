import { IProductRepository } from "../../domain/repositories/ProductRepository.interface";
import { Product } from "../../domain/entities/Product";
import { ProductApiService } from "../services/ProductApiService";
import { ProductMapper } from "../mappers/ProductMapper";

export class ProductRepositoryImpl implements IProductRepository {
  constructor(private apiService: ProductApiService) {}

  async getProductById(id: string): Promise<Product> {
    const rawData = await this.apiService.fetchProductById(id);
    return ProductMapper.toEntity(rawData);
  }
}