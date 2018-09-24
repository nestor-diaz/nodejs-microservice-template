function mongo({ mongoose, config }) {
  return {
    connect,
  };

  function connect() {
    const { connectionString } = config.mongo;
    mongoose.connect(connectionString, { useNewUrlParser: true });

    return new Promise((resolve, reject) => {
      mongoose.connection.on('error', reject);
      mongoose.connection.once('open', resolve);
    });
  }
}

module.exports = mongo;
