describe('authorController', () => {
  let authorController;
  let authorService;

  const res = {
    json: jest.fn(),
  };

  const authorsMock = [{
    id: '12345',
    firstName: 'Pedro',
    lastName: 'Nel',
  }];

  beforeAll(() => {
    authorController = container.resolve('authorController');
    authorService = container.resolve('authorService');
  });

  test('should return a list of authors', async () => {
    authorService.getAll = jest.fn().mockResolvedValue(authorsMock);

    await authorController.all({}, res);

    expect(res.json).toHaveBeenCalledWith(authorsMock);
  });

  test('should allow getting authors by id', async () => {
    const req = {
      params: { id: '12345' },
    };

    authorService.getOneById = jest.fn().mockResolvedValue(authorsMock[0]);

    await authorController.getOneById(req, res);

    expect(res.json).toHaveBeenCalledWith(authorsMock[0]);
  });

  test('should allow creating authors', async () => {
    const req = {
      body: authorsMock[0],
    };

    authorService.createOne = jest.fn().mockResolvedValue(authorsMock[0]);

    await authorController.createOne(req, res);

    expect(res.json).toHaveBeenCalledWith(authorsMock[0]);
  });

  test('should allow updating authors', async () => {
    const req = {
      params: { id: '12345' },
      body: authorsMock[0],
    };
    const result = { n: 1 };

    authorService.updateOne = jest.fn().mockResolvedValue(result);

    await authorController.updateOne(req, res);

    expect(res.json).toHaveBeenCalledWith(result);
  });

  test('should allow deleting authors', async () => {
    const req = {
      params: { id: '12345' },
    };
    const result = { ok: 1 };

    authorService.deleteOne = jest.fn().mockResolvedValue(result);

    await authorController.deleteOne(req, res);

    expect(res.json).toHaveBeenCalledWith(result);
  });
});
