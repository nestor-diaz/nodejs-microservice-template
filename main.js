require('dotenv').config();
const container = require('./src/container');

const config = container.resolve('config');
const microservice = container.resolve('microservice');
const logger = container.resolve('logger');
const mongo = container.resolve('mongo');

process.on('unhandledRejection', (reason) => {
  logger.error(`Unhandled rejection caught: ${reason}`);
});

mongo.connect()
  .then(() => {
    logger.info(`Service connected to MongoDB ${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`);

    microservice.listen(config.express.port, config.express.host, () => {
      logger.info(`Service listen on ${config.express.host}:${config.express.port}`);
    });
  })
  .catch((error) => {
    logger.error(`Error starting the application: ${error}`);
  });
