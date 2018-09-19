describe('userController', () => {
  let userController;
  let userService;

  const res = {
    json: jest.fn(),
  };

  const mockUsers = [{
    id: '12345',
    firstName: 'Pedro',
    lastName: 'Nel',
  }];

  beforeAll(() => {
    userController = container.resolve('userController');
    userService = container.resolve('userService');
  });

  test('should return a list of users', async () => {
    userService.getAll = jest.fn().mockResolvedValue(mockUsers);

    await userController.list({}, res);

    expect(res.json).toHaveBeenCalledWith(mockUsers);
  });

  test('should allow getting users by id', async () => {
    const req = {
      params: { id: '12345' },
    };

    userService.getOneById = jest.fn().mockResolvedValue(mockUsers[0]);

    await userController.getUserById(req, res);

    expect(res.json).toHaveBeenCalledWith(mockUsers[0]);
  });

  test('should allow creating users', async () => {
    const req = {
      body: mockUsers[0],
    };

    userService.createOne = jest.fn().mockResolvedValue(mockUsers[0]);

    await userController.createUser(req, res);

    expect(res.json).toHaveBeenCalledWith(mockUsers[0]);
  });

  test('should allow updating users', async () => {
    const req = {
      params: { id: '12345' },
      body: mockUsers[0],
    };
    const result = { ok: 1 };

    userService.updateOne = jest.fn().mockResolvedValue(result);

    await userController.updateUser(req, res);

    expect(res.json).toHaveBeenCalledWith(result);
  });

  test('should allow deleting users', async () => {
    const req = {
      params: { id: '12345' },
    };
    const result = { ok: 1 };

    userService.deleteOne = jest.fn().mockResolvedValue(result);

    await userController.deleteUser(req, res);

    expect(res.json).toHaveBeenCalledWith(result);
  });
});
