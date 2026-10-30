import { AuthApiService } from "../data/services/AuthApiService";
import { AuthRepositoryImpl } from "../data/repositories/AuthRepositoryImpl";

const authApiService = new AuthApiService();
const authRepository = new AuthRepositoryImpl(authApiService);

export { authRepository };