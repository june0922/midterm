/* 스텟 테이블 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('stats', {
      idx: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      id: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      expToNextLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1 
      },
      str: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      dex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      int: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      luk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    });
  };
  