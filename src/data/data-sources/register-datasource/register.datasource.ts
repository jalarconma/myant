import { Register } from "../../../core/models/Register";

export interface RegisterDataSource {
  getRegisters(): Promise<Register[]>;
}