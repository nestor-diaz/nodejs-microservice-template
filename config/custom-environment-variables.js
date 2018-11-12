const customEnvVariables = {
  express: {
    host: 'HOSTNAME',
    port: 'PORT',
  },
  postgres: {
    user: 'POSTGRES_USER',
    pass: 'POSTGRES_PASSWORD',
    db: 'POSTGRES_DB',
    host: 'POSTGRES_HOST',
  },
};

module.exports = customEnvVariables;
