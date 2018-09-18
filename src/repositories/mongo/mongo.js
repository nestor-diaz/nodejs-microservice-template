function mongo({ mongoose, config }) {
  return {
    connect,
  };

  function connect() {
    const {
      user,
      pass,
      host,
      port,
      database,
    } = config.mongo;
    const connectionString = `mongodb://${user}:${pass}@${host}:${port}/${database}`;

    mongoose.connect(connectionString, { useNewUrlParser: true });

    return new Promise((resolve, reject) => {
      mongoose.connection.on('error', reject(new Error('Error stablishing connection to MongoDB')));
      mongoose.connection.once('open', resolve);
    });
  }
}

module.exports = mongo;
