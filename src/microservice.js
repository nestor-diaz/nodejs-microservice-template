const express = require('express');
const bodyParser = require('body-parser');
const expressWinston = require('express-winston');

function microservice({ apiV1Router, logger }) {
  const app = express();

  app.use(bodyParser.json());
  app.use(expressWinston.logger({ winstonInstance: logger }));
  app.use(apiV1Router);
  app.use(expressWinston.errorLogger({
    winstonInstance: logger,
    msg: '{{err.message}} {{res.statusCode}} {{req.method}}',
  }));

  return app;
}

module.exports = microservice;