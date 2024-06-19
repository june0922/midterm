/* 퀘스트테이블 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('quests', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        completedQuests: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        totalQuests: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        inProgressQuests: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        progress: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        questNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        questTitle: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        questText: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        stat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
