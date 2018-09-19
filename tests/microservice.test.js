const request = require('supertest');

describe('microservice', () => {
  let microservice;
  let userService;

  beforeAll(() => {
    microservice = container.resolve('microservice');
    userService = container.resolve('userService');
  });

  test('should expose a method to get a list of users', async () => {
    userService.getAll = jest.fn().mockResolvedValue([]);

    await request(microservice)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test('should expose a method to get a user by id', async () => {
    userService.getOneById = jest.fn().mockResolvedValue({});

    await request(microservice)
      .get('/api/v1/users/1234')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test('should expose a method to create a user', async () => {
    const user = { firstName: 'Paul' };
    userService.createOne = jest.fn().mockResolvedValue(user);

    await request(microservice)
      .post('/api/v1/users')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test('should expose a method to update a user', async () => {
    const user = { id: '1234', firstName: 'Paul' };
    userService.updateOne = jest.fn().mockResolvedValue(user);

    await request(microservice)
      .patch('/api/v1/users/1234')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test('should expose a method to delete a user', async () => {
    userService.deleteOne = jest.fn().mockResolvedValue();

    await request(microservice)
      .delete('/api/v1/users/1234')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
