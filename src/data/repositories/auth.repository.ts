import { User } from "../../core/models/User";
import { AuthRepository } from "../../core/repositories/auth.repository";
import { AuthDataSource } from "../data-sources/auth-datasource/auth.datasource";
import { AuthDataSourceCognito } from "../data-sources/auth-datasource/auth.datasource.cognito";

export class AuthRepositoryImpl implements AuthRepository {

  constructor(
    private readonly dataSourceCognito: AuthDataSource,
  ) {
  }

  async getAuthenticatedUser(): Promise<User | undefined> {
    return this.dataSourceCognito.getAuthenticatedUser();
  }

  async isAuthenticated(): Promise<boolean> {
    return this.dataSourceCognito.isAuthenticated();
  }

  async googleLogin(): Promise<void> {
    await this.dataSourceCognito.googleLogin();
  }

  async logout(): Promise<void> {
    await this.dataSourceCognito.logout();
  }
}