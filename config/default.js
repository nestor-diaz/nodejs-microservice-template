const config = {
  express: {
    host: 'localhost',
    port: '8088',
  },
  logger: {
    exitOnError: false,
    transports: {
      console: {
        enabled: true,
        level: 'info',
        timestamp: true,
        prettyPrint: true,
        handleExceptions: true,
        humanReadableUnhandledException: true,
      },
    },
  },
};

module.exports = config;
