describe('authorRepository', () => {
  let authorRepository;
  let models;

  const authorsMock = [{
    id: '12345',
    firstName: 'Pedro',
    lastName: 'Nel',
  }];

  beforeAll(() => {
    authorRepository = container.resolve('authorRepository');
    models = container.resolve('models');
  });

  test('should expose a method to get all authors', async () => {
    models.author.findAndCountAll = jest.fn().mockResolvedValue(authorsMock);

    const authors = await authorRepository.getAll();

    expect(authors).toEqual(authorsMock);
  });

  test('should expose a method to get one author by id', async () => {
    const authorId = authorsMock[0].id;
    models.author.findOne = jest.fn().mockResolvedValue(authorsMock[0]);

    const author = await authorRepository.getOneById(authorId);

    expect(models.author.findOne).toHaveBeenCalled();
    expect(author).toEqual(authorsMock[0]);
  });

  test('should expose a method to add one author', async () => {
    models.author.create = jest.fn().mockResolvedValue();

    await authorRepository.addOne(authorsMock[0]);

    expect(models.author.create).toHaveBeenCalledWith(authorsMock[0]);
  });

  test('should expose a method to update one author', async () => {
    const authorId = authorsMock[0].id;
    models.author.update = jest.fn().mockResolvedValue();

    await authorRepository.updateOne(authorId, authorsMock[0]);

    expect(models.author.update).toHaveBeenCalled();
  });

  test('should expose a method to delete one author', async () => {
    const authorId = authorsMock[0].id;
    models.author.destroy = jest.fn().mockResolvedValue();

    await authorRepository.deleteOne(authorId);

    expect(models.author.destroy).toHaveBeenCalled();
  });
});
