const express = require('express');

function apiV1Router({ mainController }) {
  return express.Router().use('/api/v1', express.Router()
    .get('/main', mainController.get));
}

module.exports = apiV1Router;
