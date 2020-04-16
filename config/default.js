const defaultConfig = {
  express: {
    host: 'localhost',
    port: '4000',
  },
  postgres: {
    user: 'postgres',
    password: 'Password.p1',
    database: 'vacancies',
    host: 'localhost',
    port: 5433,
  },
  logger: {
    exitOnError: false,
    transports: {
      console: {
        level: 'info',
        timestamp: true,
        prettyPrint: true,
        handleExceptions: true,
        humanReadableUnhandledException: true,
      },
    },
  },
};

module.exports = defaultConfig;
