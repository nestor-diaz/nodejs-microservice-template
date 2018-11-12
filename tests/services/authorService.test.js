describe('authorService', () => {
  let authorService;
  let authorRepository;

  const authorsMock = [{
    id: '12345',
    firstName: 'Pedro',
    lastName: 'Nel',
  }];

  beforeAll(() => {
    authorService = container.resolve('authorService');
    authorRepository = container.resolve('authorRepository');
  });

  test('should expose a method to get all authors', async () => {
    authorRepository.getAll = jest.fn().mockResolvedValue(authorsMock);

    const authors = await authorService.getAll();

    expect(authorRepository.getAll).toHaveBeenCalled();
    expect(authors).toEqual(authorsMock);
  });

  test('should expose a method to get one author by id', async () => {
    const authorId = authorsMock[0].id;
    authorRepository.getOneById = jest.fn().mockResolvedValue(authorsMock[0]);

    const author = await authorService.getOneById(authorId);

    expect(authorRepository.getOneById).toHaveBeenCalled();
    expect(author).toEqual(authorsMock[0]);
  });

  test('should expose a method to create one author', async () => {
    authorRepository.addOne = jest.fn().mockResolvedValue(authorsMock[0]);

    const author = await authorService.createOne(authorsMock[0]);

    expect(authorRepository.addOne).toHaveBeenCalledWith(authorsMock[0]);
    expect(author).toEqual(authorsMock[0]);
  });

  test('should expose a method to update one author', async () => {
    const authorId = authorsMock[0].id;
    authorRepository.updateOne = jest.fn().mockResolvedValue(authorsMock[0]);

    const author = await authorService.updateOne(authorId, authorsMock[0]);

    expect(authorRepository.updateOne).toHaveBeenCalledWith(authorId, authorsMock[0]);
    expect(author).toEqual(authorsMock[0]);
  });

  test('should expose a method to delete one author', async () => {
    const authorId = authorsMock[0].id;
    authorRepository.deleteOne = jest.fn().mockResolvedValue(authorsMock[0]);

    const author = await authorService.deleteOne(authorId);

    expect(authorRepository.deleteOne).toHaveBeenCalledWith(authorId);
    expect(author).toEqual(authorsMock[0]);
  });
});
