const Sequelize = require('sequelize');

function sequelize({ logger, config }) {
  return new Sequelize(
    config.postgres.db,
    config.postgres.user,
    config.postgres.pass,
    {
      host: config.postgres.host,
      dialect: 'postgres',
      operatorsAliases: false,
      logging: (message) => {
        logger.debug(message);
      },
    },
  );
}

module.exports = sequelize;
