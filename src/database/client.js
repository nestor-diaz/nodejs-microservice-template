const sql = require('mssql');

function client(config) {
  let pool = null;
  const closePool = async () => {
    try {
      // try to close the connection pool
      await pool.close();

      // set the pool to null to endure a new one will be created by getConnection()
      pool = null;
    } catch (err) {
      // error closing the connection (could already be closed)
      // set the pool to ensure a new one will be created by getConnection()
      pool = null;
    }
  };

  const getConnection = async () => {
    try {
      if (pool) {
        // if exists, return the existing one
        return pool;
      }
      pool = await sql.connect(config);
      pool.on('error', async () => {
        await closePool();
      });
    } catch (err) {
      pool = null;
    }
    return pool;
  };
  return { closePool, getConnection };
}

module.exports = client;
