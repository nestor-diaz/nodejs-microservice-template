const customEnvVariables = {
  express: {
    host: 'HOSTNAME',
    port: 'PORT',
  },
  mongo: {
    user: 'MONGO_USER',
    pass: 'MONGO_USER_PASS',
    host: 'MONGO_HOST',
    port: 'MONGO_PORT',
    database: 'MONGO_DB',
  },
};

module.exports = customEnvVariables;
