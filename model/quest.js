/* 스텟 테이블 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('stat', {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true, /* 자동 숫자 증가 */
            primaryKey: true,            /* INTEGER */
            allwNull: false        /* 오류감지 */
        },
        user_id: {
            type: DataTypes.STRING(250)
        },
        entered_quests:{
            type: DataTypes.STRING(250)
        },
        completed_quests:{

        },
        quest_progress:{

        }

    })
}