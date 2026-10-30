import { User } from "../entities/User";

export interface IAuthRepository {
  login(email: string, password: string): Promise<{ token: string; user: User }>;
  logout(): Promise<void>;
  isAuthenticated(): boolean;
  getCurrentUser(): User | null;
}