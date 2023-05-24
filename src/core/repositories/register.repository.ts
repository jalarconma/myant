import { Register } from "../models/Register";

export interface RegisterRepository {
  getRegisters(): Promise<Register[]>;
}