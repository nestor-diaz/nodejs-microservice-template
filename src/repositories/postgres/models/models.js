const fs = require('fs');
const path = require('path');

function models({ sequelize }) {
  const loadedModels = {};

  fs.readdirSync(__dirname)
    .filter(file => file.match(/.*Model\.(js)/ig))
    .forEach((file) => {
      const model = sequelize.import(path.join(__dirname, file));

      loadedModels[model.name] = model;
    });

  return loadedModels;
}

module.exports = models;
