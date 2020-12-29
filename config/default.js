const defaultConfig = {
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
  database: {
    user: '',
    password: '',
    server: '',
    name: '',
  },
};

module.exports = defaultConfig;
