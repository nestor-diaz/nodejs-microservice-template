describe('userRepository', () => {
  let userRepository;
  let userModel;

  const mockUsers = [{
    id: '12345',
    firstName: 'Pedro',
    lastName: 'Nel',
  }];

  beforeAll(() => {
    userRepository = container.resolve('userRepository');
    userModel = container.resolve('userModel');
  });

  test('should expose a method to get all users', async () => {
    userModel.find = jest.fn().mockResolvedValue(mockUsers);

    const users = await userRepository.getAll();

    expect(userModel.find).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  });

  test('should expose a method to get one user by id', async () => {
    const userId = mockUsers[0].id;
    userModel.findById = jest.fn().mockResolvedValue(mockUsers[0]);

    const user = await userRepository.getOneById(userId);

    expect(userModel.findById).toHaveBeenCalled();
    expect(user).toEqual(mockUsers[0]);
  });

  test('should expose a method to add one user', async () => {
    userModel.create = jest.fn().mockResolvedValue();

    await userRepository.addOne(mockUsers[0]);

    expect(userModel.create).toHaveBeenCalledWith(mockUsers[0]);
  });

  test('should expose a method to update one user', async () => {
    const userId = mockUsers[0].id;
    userModel.updateOne = jest.fn().mockResolvedValue();

    await userRepository.updateOne(userId, mockUsers[0]);

    expect(userModel.updateOne).toHaveBeenCalledWith({ _id: userId }, mockUsers[0]);
  });

  test('should expose a method to delete one user', async () => {
    const userId = mockUsers[0].id;
    userModel.deleteOne = jest.fn().mockResolvedValue();

    await userRepository.deleteOne(userId);

    expect(userModel.deleteOne).toHaveBeenCalledWith({ _id: userId });
  });
});
