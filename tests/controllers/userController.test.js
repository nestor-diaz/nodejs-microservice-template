describe('mainController', () => {
  let mainController;
  let mainService;
  const res = {
    json: jest.fn(),
  };

  beforeAll(() => {
    mainController = container.resolve('mainController');
    mainService = container.resolve('mainService');
  });

  test('should get a response from the GET method', async () => {
    const mainServiceGetPayload = 'GET-Payload';

    // Mock GET method in the service.
    mainService.get = jest.fn().mockResolvedValue(mainServiceGetPayload);

    // Call GET method in the controller mocking the express params.
    await mainController.get({}, res);

    // Expect json to be called with the payload.
    expect(res.json).toHaveBeenCalledWith(mainServiceGetPayload);
  });
});
