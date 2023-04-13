import { User } from "../../../core/models/User";

export interface AuthDataSource {
  getAuthenticatedUser(): Promise<User | undefined>;
  isAuthenticated(): Promise<boolean>;
  googleLogin(): Promise<void>;
  logout(): Promise<void>;
}