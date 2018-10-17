const {
  createContainer, Lifetime, asFunction, asValue,
} = require('awilix');
const config = require('config');
const mongoose = require('mongoose');
const httpCodes = require('http-status-codes');
const boom = require('boom');
const microservice = require('./microservice');

const container = createContainer();

container.loadModules([
  'src/controllers/**/*.js',
  'src/repositories/**/*.js',
  'src/repositories/mongo/**/*.js',
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
  mongoose: asFunction(() => mongoose),
  httpCodes: asFunction(() => httpCodes),
  httpErrors: asFunction(() => boom),
});

module.exports = container;
