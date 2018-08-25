const {
  createContainer, Lifetime, asFunction, asValue,
} = require('awilix');
const config = require('config');
const microservice = require('./microservice');

const container = createContainer();

container.loadModules([
  'src/controllers/**/*.js',
  'src/routes/**/*.js',
  'src/services/**/*.js',
  'src/utils/**/*.js',
], {
  resolverOptions: {
    register: asFunction,
    lifetime: Lifetime.SINGLETON,
  },
});

container.register({
  microservice: asFunction(microservice),
  config: asValue(config),
});

module.exports = container;
