export interface AuthRepository {
  isAuthenticated(): Promise<boolean>;
  googleLogin(): Promise<void>;
  logout(): Promise<void>;
}