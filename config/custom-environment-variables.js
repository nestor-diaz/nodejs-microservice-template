const customEnvVariables = {
  express: {
    host: 'HOSTNAME',
    port: 'PORT',
  },
  mongo: {
    user: 'MONGODB_USER',
    pass: 'MONGODB_PASS',
    host: 'MONGODB_HOST',
    port: 'MONGODB_PORT',
    database: 'MONGODB_DB',
  },
};

module.exports = customEnvVariables;
