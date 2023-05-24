import { AccountRepository } from "../../../core/repositories/account.repository";
import { AccountUseCases } from "../../../core/use-cases/account.usecases";
import { AccountDataSource } from "../../../data/data-sources/account-datasource/account.datasource";
import { AccountDataSourceCloud } from "../../../data/data-sources/account-datasource/account.datasource.cloud";
import { AccountRepositoryImpl } from "../../../data/repositories/account.repository";

export class AccountServiceLocator {

  private static locator: AccountServiceLocator;

  private accountUseCase: AccountUseCases;

  constructor() {
    const dataSource: AccountDataSource = new AccountDataSourceCloud();
    const AuthRepository: AccountRepository = new AccountRepositoryImpl(dataSource)
    this.accountUseCase = new AccountUseCases(AuthRepository);
  }

  public static getInstance(): AccountServiceLocator {
    if (this.locator == null) {
      this.locator = new AccountServiceLocator();
    }
    return this.locator;
  }

  public getAccountUseCase(): AccountUseCases {
    return this.accountUseCase;
  }
}