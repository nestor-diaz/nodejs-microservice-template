const container = require('./src/container');

const config = container.resolve('config');
const microservice = container.resolve('microservice');
const logger = container.resolve('logger');

process.on('unhandledRejection', (reason) => {
  logger.error(`Unhandled rejection caught: ${reason}`);
});

microservice.listen(config.express.port, config.express.host, () => {
  logger.info(`Service listen on ${config.express.host}:${config.express.port}`);
});
