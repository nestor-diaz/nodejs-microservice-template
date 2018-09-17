const express = require('express');

function apiV1Router({ userController }) {
  return express.Router().use('/api/v1', express.Router()

    // Users endpoints
    .get('/users', userController.list)
    .get('/users/:id', userController.getUserByIde)
    .post('/users', userController.createUser)
    .put('/users', userController.updateUser)
    .delete('/users', userController.deleteUser));
}

module.exports = apiV1Router;
