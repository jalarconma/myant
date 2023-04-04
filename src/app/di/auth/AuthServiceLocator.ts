import { AuthUseCases } from "../../../core/use-cases/auth.usecases";
import { AuthDataSource } from "../../../data/data-sources/auth-datasource/auth.datasource";
import { AuthDataSourceCognito } from "../../../data/data-sources/auth-datasource/auth.datasource.cognito";
import { AuthRepositoryImpl } from "../../../data/repositories/auth.repository";
import { AuthRepository } from './../../../core/repositories/auth.repository';

export class AuthServiceLocator {

  private static locator: AuthServiceLocator;

  private authUseCase: AuthUseCases;

  constructor() {
    const dataSource: AuthDataSource = new AuthDataSourceCognito();
    const AuthRepository: AuthRepository = new AuthRepositoryImpl(dataSource)
    this.authUseCase = new AuthUseCases(AuthRepository);
  }

  public static getInstance(): AuthServiceLocator {
    if (this.locator == null) {
      this.locator = new AuthServiceLocator();
    }
    return this.locator;
  }

  public getAuthUseCase(): AuthUseCases {
    return this.authUseCase;
  }
}