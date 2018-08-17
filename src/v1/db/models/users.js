/* jshint indent: 2 */
const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var User =  sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    password: {
      type: DataTypes.CHAR(200),
      allowNull: true
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
  User.beforeCreate((user) => {
    var salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password,salt);

  })
  return User;
};
