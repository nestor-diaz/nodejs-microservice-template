const defaultConfig = {
  express: {
    host: 'localhost',
    port: '4000',
  },
  postgres: {
    user: '',
    pass: '',
    db: '',
    host: '',
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
