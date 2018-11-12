function authorModel(sequelize, DataTypes) {
  const TABLE_NAME = 'author';

  return sequelize.define(TABLE_NAME, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  }, {
    underscored: true,
  });
}

module.exports = authorModel;
