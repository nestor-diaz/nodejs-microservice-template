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
      return `mongodb://${this.mongo.user}:${this.mongo.pass}@${this.mongo.host}:${this.mongo.port}/${this.mongo.database}`;
    }),
  },
};

module.exports = defaultConfig;
