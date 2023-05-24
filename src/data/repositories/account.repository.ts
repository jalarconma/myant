import { Account } from "../../core/models/Account";
import { AccountRepository } from "../../core/repositories/account.repository";
import { AccountDataSource } from "../data-sources/account-datasource/account.datasource";

export class AccountRepositoryImpl implements AccountRepository {

  constructor(
    private readonly dataSourceCloud: AccountDataSource,
  ) {
  }
  getAccounts(): Promise<Account[]> {
    return this.dataSourceCloud.getAccounts();
  }

}