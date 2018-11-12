function postgres({ sequelize, relations }) {
  return {
    synchronize,
  };

  async function synchronize() {
    // Check if Sequelize connection to Postgres is up.
    await sequelize.authenticate();

    // Build model relations.
    await relations.build();

    // Synchronize Models with Postgres.
    await sequelize.sync();
  }
}

module.exports = postgres;
