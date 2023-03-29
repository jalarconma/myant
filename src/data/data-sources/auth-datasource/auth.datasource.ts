export interface AuthDataSource {
  isAuthenticated(): Promise<boolean>;
  googleLogin(): Promise<void>;
  logout(): Promise<void>;
}