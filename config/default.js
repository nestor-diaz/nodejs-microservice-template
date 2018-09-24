const defer = require('config/defer').deferConfig;

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
    connectionString: defer(function () {
      return `mongodb://${this.mongo.host}:${this.mongo.port}`
    }),
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
