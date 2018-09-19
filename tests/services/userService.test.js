describe('mainService', () => {
  let mainService;

  beforeAll(() => {
    mainService = container.resolve('mainService');
  });

  test('should get a promise from the get method', async () => {
    const getValue = await mainService.get();

    expect(getValue).toEqual({ GET: 'Main Service / GET response' });
  });
});
