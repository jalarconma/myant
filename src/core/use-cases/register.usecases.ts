import { Register } from "../models/Register";
import { RegisterRepository } from "../repositories/register.repository";

export class RegisterUseCases {
  constructor(
    private readonly regRepository: RegisterRepository,
  ) {}

  async getRegisters(): Promise<Register[]> {
    const registers = await this.regRepository.getRegisters();
    return registers;
  }
}