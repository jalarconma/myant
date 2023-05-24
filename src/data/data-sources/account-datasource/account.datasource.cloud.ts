import _ from 'lodash';
import { AccountDataSource } from './account.datasource';
import { Account } from '../../../core/models/Account';
import apiClient from '../../axios/axios.client';

export class AccountDataSourceCloud implements AccountDataSource {

  async getAccounts(): Promise<Account[]> {
    const accounts = await apiClient.get<Account[]>('/accounts');
    return accounts.data;
  }

}