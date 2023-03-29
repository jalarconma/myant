import { AuthRepository } from "../repositories/auth.repository";

export class AuthUseCases {
  constructor(
    private readonly authRepository: AuthRepository,
  ) {}

  async isAuthenticated(): Promise<boolean> {
    const auth = await this.authRepository.isAuthenticated();
    return auth;
  }

  async googleLogin(): Promise<void> {
    await this.authRepository.googleLogin();
  }

  async logout(): Promise<void> {
    await this.authRepository.logout();
  }
}