export class UserUserCases {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userMapper: UserMapper,
  ) {}

  async getUser(id: string): Promise<User> {
    const user = await this.userRepository.getUser(id);
    return this.userMapper.mapToDomain(user);
  }

  async createUser(user: User): Promise<User> {
    const userEntity = this.userMapper.mapToEntity(user);
    const createdUser = await this.userRepository.createUser(userEntity);
    return this.userMapper.mapToDomain(createdUser);
  }
}