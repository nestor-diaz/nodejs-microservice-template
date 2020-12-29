const express = require('express');
const cors = require('cors');

function apiV1Router({ taskInstanceController }) {
  return express.Router().use(
    '/api/v1',
    cors(),
    express
      .Router()
      // task instance endpoints
      .get('/taskinstance', taskInstanceController.getAll)
      .patch('/taskinstance/:id', taskInstanceController.updateOne)
  );
}

module.exports = apiV1Router;
