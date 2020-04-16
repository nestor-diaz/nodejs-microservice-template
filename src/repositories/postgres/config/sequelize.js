const Sequelize = require('sequelize');

function sequelize({ logger, config }) {
  return new Sequelize(config.postgres.database, config.postgres.user, config.postgres.password, {
    host: config.postgres.host,
    port: config.postgres.port,
    dialect: 'postgres',
    logging: (message) => {
      logger.debug(message);
    },
  });
}

module.exports = sequelize;
