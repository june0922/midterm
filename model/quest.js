/* 퀘스트 테이블 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('quests', {
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
      entered_quests: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
      },
      completed_quests: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
      },
      quest_progress: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {}
      },
      totalQuests: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      completedQuests: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      currentQuestIndex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    });
  };
  