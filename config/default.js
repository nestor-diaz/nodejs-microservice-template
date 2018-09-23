const defaultConfig = {
  express: {
    host: 'localhost',
    port: '8090',
  },
  mongo: {
    user: '',
    pass: '',
    host: '',
    port: '27017',
    database: '',
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
