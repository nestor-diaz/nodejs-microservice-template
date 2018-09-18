const express = require('express');

function apiV1Router({ userController }) {
  return express.Router().use('/api/v1', express.Router()

    // Users endpoints
    .get('/users', userController.list)
    .get('/users/:id', userController.getUserById)
    .post('/users', userController.createUser)
    .patch('/users/:id', userController.updateUser)
    .delete('/users/:id', userController.deleteUser));
}

module.exports = apiV1Router;
