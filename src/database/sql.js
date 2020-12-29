const dataClient = require('./client');

function sql({ config }) {
  // create an instance of the database client
  const client = dataClient(config.database);

  // expose the client so it is available everywhere "server" is available
  return client;
}

module.exports = sql;
