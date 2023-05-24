import { Account } from "../models/Account";

export interface AccountRepository {
  getAccounts(): Promise<Account[]>;
}