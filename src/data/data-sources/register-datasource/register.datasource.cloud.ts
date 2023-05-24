import _ from 'lodash';

import { RegisterDataSource } from './register.datasource';
import { Register } from '../../../core/models/Register';

export class RegisterDataSourceCloud implements RegisterDataSource {

  async getRegisters(): Promise<Register[]> {
    throw new Error('Method not implemented.');
  }

}