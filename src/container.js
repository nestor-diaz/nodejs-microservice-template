const { createContainer, Lifetime, asFunction, asValue } = require('awilix');
const config = require('config');
const httpCodes = require('http-status-codes');
const boom = require('@hapi/boom');
const microservice = require('./microservice');

const container = createContainer();

container.loadModules(
  [
    'src/controllers/*.js',
    'src/repositories/*.js',
    'src/database/*.js',
    'src/routes/**/*.js',
    'src/services/*.js',
    'src/utils/*.js',
  ],
  {
    resolverOptions: {
      register: asFunction,
      lifetime: Lifetime.SINGLETON,
    },
  }
);

container.register({
  microservice: asFunction(microservice),
  config: asValue(config),
  httpCodes: asFunction(() => httpCodes),
  httpErrors: asFunction(() => boom),
});

module.exports = container;
