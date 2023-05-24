import { Account } from "../../../core/models/Account";

export interface AccountDataSource {
  getAccounts(): Promise<Account[]>;
}