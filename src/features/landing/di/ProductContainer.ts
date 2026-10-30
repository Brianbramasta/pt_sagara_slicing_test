import { ProductApiService } from "../data/services/ProductApiService";
import { ProductRepositoryImpl } from "../data/repositories/ProductRepositoryImpl";
import { GetProductUseCase } from "../domain/usecases/GetProductUseCase";

const productApiService = new ProductApiService();
const productRepository = new ProductRepositoryImpl(productApiService);
export const getProductUseCase = new GetProductUseCase(productRepository);