const express = require('express');
const bodyParser = require('body-parser');

function microservice({ apiV1Router }) {
  const app = express();

  app.use(bodyParser.json());
  app.use(apiV1Router);

  return app;
}

module.exports = microservice;
