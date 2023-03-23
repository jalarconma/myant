import { User } from './../models/User';

export interface UserService {
  getUserInfoByEmail: (email: string) => User
}