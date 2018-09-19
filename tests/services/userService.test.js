describe('userService', () => {
  let userService;
  let userRepository;

  const mockUsers = [{
    id: '12345',
    firstName: 'Pedro',
    lastName: 'Nel',
  }];

  beforeAll(() => {
    userService = container.resolve('userService');
    userRepository = container.resolve('userRepository');
  });

  test('should expose a method to get all users', async () => {
    userRepository.getAll = jest.fn().mockResolvedValue(mockUsers);

    const users = await userService.getAll();

    expect(userRepository.getAll).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  });

  test('should expose a method to get one user by id', async () => {
    const userId = mockUsers[0].id;
    userRepository.getOneById = jest.fn().mockResolvedValue(mockUsers[0]);

    const user = await userService.getOneById(userId);

    expect(userRepository.getOneById).toHaveBeenCalled();
    expect(user).toEqual(mockUsers[0]);
  });

  test('should expose a method to create one user', async () => {
    const inactiveUser = { ...mockUsers[0], active: false };
    userRepository.addOne = jest.fn().mockResolvedValue(mockUsers[0]);

    const user = await userService.createOne(mockUsers[0]);

    expect(userRepository.addOne).toHaveBeenCalledWith(inactiveUser);
    expect(user).toEqual(mockUsers[0]);
  });

  test('should expose a method to update one user', async () => {
    const userId = mockUsers[0].id;
    const updatedUser = { ...mockUsers[0], updated: true };
    userRepository.updateOne = jest.fn().mockResolvedValue(mockUsers[0]);

    const user = await userService.updateOne(userId, mockUsers[0]);

    expect(userRepository.updateOne).toHaveBeenCalledWith(userId, updatedUser);
    expect(user).toEqual(mockUsers[0]);
  });

  test('should expose a method to delete one user', async () => {
    const userId = mockUsers[0].id;
    userRepository.deleteOne = jest.fn().mockResolvedValue(mockUsers[0]);

    const user = await userService.deleteOne(userId);

    expect(userRepository.deleteOne).toHaveBeenCalledWith(userId);
    expect(user).toEqual(mockUsers[0]);
  });
});
