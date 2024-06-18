/* 유저 테이블 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    id: {
      type: DataTypes.STRING(250),
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    birth: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(250),
      unique: true,
      allowNull: false
    }
  });
};
