import { IAuthRepository } from "../../domain/repositories/AuthRepository.interface";
import { User } from "@/features/auth/domain/entities/User";
import { AuthApiService } from "../services/AuthApiService";
import { AuthMapper } from "../mappers/AuthMapper";

export class AuthRepositoryImpl implements IAuthRepository {
  private apiService: AuthApiService;

  constructor(apiService: AuthApiService) {
    this.apiService = apiService;
  }

  async login(email: string, password: string): Promise<{ token: string; user: User }> {
    const response = await this.apiService.login({ email, password });
    const user = AuthMapper.toUser(response.data.user);
    return { token: response.data.accessToken, user };
  }

  async logout(): Promise<void> {
    await this.apiService.logout();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("access_token");
  }

  getCurrentUser(): User | null {
    const token = localStorage.getItem("access_token");
    if (!token) return null;
    const userJson = localStorage.getItem("user");
    return userJson ? JSON.parse(userJson) : null;
  }
}