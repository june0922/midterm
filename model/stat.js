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
        LEVEL: {
            type: DataTypes.INTEGER(250)
        },
        EXPERIENCE: {
            type: DataTypes.INTEGER(250)
        },  
        STR: {
            type: DataTypes.INTEGER(250)
        },
        DEX: {
            type: DataTypes.INTEGER(250)
        },
        INT: {
            type: DataTypes.INTEGER(250)
        },
        LUK: {
            type: DataTypes.INTEGER(250)
        }

    })
}