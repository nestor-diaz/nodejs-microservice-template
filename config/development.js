const defaultConfig = {
  express: {
    host: 'localhost',
    port: '4000',
  },
  logger: {
    transports: {
      console: {
        level: 'debug',
      },
    },
  },
};

module.exports = defaultConfig;
