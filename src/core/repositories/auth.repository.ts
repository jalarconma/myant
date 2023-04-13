import { User } from "../models/User";

export interface AuthRepository {
  isAuthenticated(): Promise<boolean>;
  getAuthenticatedUser(): Promise<User | undefined>;
  googleLogin(): Promise<void>;
  logout(): Promise<void>;
}