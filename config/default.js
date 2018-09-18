const defaultConfig = {
  express: {
    host: 'localhost',
    port: '8088',
  },
  mongo: {
    user: '',
    pass: '',
    host: '',
    port: '',
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
