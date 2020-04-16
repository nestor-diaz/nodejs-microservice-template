//require('dotenv').config();
const container = require('./src/container');

const config = container.resolve('config');
const microservice = container.resolve('microservice');
const logger = container.resolve('logger');
const postgres = container.resolve('postgres');

process.on('unhandledRejection', (reason) => {
  logger.error(`Unhandled rejection caught: ${reason}`);
});

async function init() {
  try {
    await postgres.synchronize();

    logger.info(`Service connected to PostgresDB at ${config.postgres.host}`);

    const expressApp = await microservice.setUpExpress();

    expressApp.listen(config.express.port, config.express.host, () => {
      logger.info(`Service listen on ${config.express.host}:${config.express.port}`);
    });
  } catch (error) {
    logger.error(`Error starting the application: ${error}`);
  }
}

init();
