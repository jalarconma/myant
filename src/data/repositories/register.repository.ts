import { Register } from "../../core/models/Register";
import { RegisterRepository } from "../../core/repositories/register.repository";
import { RegisterDataSource } from "../data-sources/register-datasource/register.datasource";

export class RegisterRepositoryImpl implements RegisterRepository {

  constructor(
    private readonly dataSourceCloud: RegisterDataSource,
  ) {
  }
  async getRegisters(): Promise<Register[]> {
    return this.dataSourceCloud.getRegisters();
  }
}