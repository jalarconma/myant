import { RegisterRepository } from "../../../core/repositories/register.repository";
import { RegisterUseCases } from "../../../core/use-cases/register.usecases";
import { RegisterDataSource } from "../../../data/data-sources/register-datasource/register.datasource";
import { RegisterDataSourceCloud } from "../../../data/data-sources/register-datasource/register.datasource.cloud";
import { RegisterRepositoryImpl } from "../../../data/repositories/register.repository";


export class RegisterServiceLocator {

  private static locator: RegisterServiceLocator;

  private registerUseCase: RegisterUseCases;

  constructor() {
    const dataSource: RegisterDataSource = new RegisterDataSourceCloud();
    const repository: RegisterRepository = new RegisterRepositoryImpl(dataSource)
    this.registerUseCase = new RegisterUseCases(repository);
  }

  public static getInstance(): RegisterServiceLocator {
    if (this.locator == null) {
      this.locator = new RegisterServiceLocator();
    }
    return this.locator;
  }

  public getRegisterUseCase(): RegisterUseCases {
    return this.registerUseCase;
  }
}