import { LoginResponseDTO } from "../dtos/AuthDTO";
import { User } from "@/features/auth/domain/entities/User";

export class AuthMapper {
  static toUser(dto: LoginResponseDTO["user"]): User {
    return {
      id: dto.id,
      email: dto.email,
      name: dto.fullName,
      fullName: dto.fullName,
      role: dto.role,
    };
  }
}