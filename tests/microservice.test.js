const request = require('supertest');

describe('microservice', () => {
  let microservice;

  beforeAll(() => {
    microservice = container.resolve('microservice');
  });

  test('should respond the get method', async () => {
    await request(microservice).get('/api/v1/main').expect(200);
  });
});
