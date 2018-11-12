function bookModel(sequelize, DataTypes) {
  const TABLE_NAME = 'book';

  return sequelize.define(TABLE_NAME, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    underscored: true,
  });
}

module.exports = bookModel;
