const winston = require('winston');
const chalk = require('chalk');

function logger({ config }) {
  const loggerFormat = winston.format.printf((log) => {
    const logTimestamp = chalk.bold(log.timestamp);

    switch (log.level) {
      case 'info':
        return `${logTimestamp} [${chalk.green(log.level)}]: ${log.message}`;
      case 'error':
        return `${logTimestamp} [${chalk.red(log.level)}]: ${log.message}`;
      case 'warning':
        return `${logTimestamp} [${chalk.yellow(log.level)}]: ${log.message}`;
      default:
        return `${logTimestamp} [${log.level}]: ${log.message}`;
    }
  });

  return winston.createLogger({
    format: winston.format.combine(winston.format.timestamp(), loggerFormat),
    transports: [new winston.transports.Console(config.logger.transports.console)],
    exitOnError: config.logger.exitOnError,
  });
}

module.exports = logger;
