const express = require('express');

function apiV1Router({ authorController }) {
  return express.Router().use('/api/v1', express.Router()

    // Authors endpoints
    .get('/authors', authorController.all)
    .get('/authors/:id', authorController.getOneById)
    .post('/authors', authorController.createOne)
    .patch('/authors/:id', authorController.updateOne)
    .delete('/authors/:id', authorController.deleteOne));
}

module.exports = apiV1Router;
