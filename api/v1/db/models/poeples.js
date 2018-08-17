/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poeples', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'poeples',
    timestamps: false
  });
};
