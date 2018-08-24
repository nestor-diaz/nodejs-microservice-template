const container = require('./src/container');

const config = container.resolve('config');
const microservice = container.resolve('microservice');

microservice.listen(config.express.port, config.express.host, () => {
  console.log(`Service listen on ${config.express.host}:${config.express.port}`);
});
