import { apiService, ApiResponse } from "@/services/api";
import { LoginRequestDTO, LoginResponseDTO } from "../dtos/AuthDTO";

export class AuthApiService {
  async login(data: LoginRequestDTO): Promise<ApiResponse<LoginResponseDTO>> {
    return apiService.post<LoginResponseDTO>("/auth/login", data);
  }

  async logout(): Promise<ApiResponse<void>> {
    return apiService.post<void>("/auth/logout");
  }
}