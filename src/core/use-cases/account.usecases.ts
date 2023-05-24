import { Account } from "../models/Account";
import { AccountRepository } from "../repositories/account.repository";

export class AccountUseCases {
  constructor(
    private readonly accountRepository: AccountRepository,
  ) {}

  async getAccounts(): Promise<Account[]> {
    const accounts = await this.accountRepository.getAccounts();
    return accounts;
  }
}