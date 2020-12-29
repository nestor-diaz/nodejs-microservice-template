const boom = require('@hapi/boom');

// eslint-disable-next-line
function errorMiddleware(err, req, res, next) {
  let error = err;

  if (!boom.isBoom(err)) {
    error = boom.internal(err);
  }

  const {
    output: { payload, statusCode },
    message,
  } = error;

  return res.status(statusCode).json({ ...payload, message });
}

module.exports = errorMiddleware;
