import { AuthRepository } from "../../core/repositories/auth.repository";
import { AuthDataSource } from "../data-sources/auth-datasource/auth.datasource";
import { AuthDataSourceCognito } from "../data-sources/auth-datasource/auth.datasource.cognito";

export class AuthRepositoryImpl implements AuthRepository {

  constructor(
    private readonly dataSourceCognito: AuthDataSource,
  ) {
    this.dataSourceCognito = new AuthDataSourceCognito();
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