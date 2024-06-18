/* 유저 테이블 */

module.exports = function(sequelize,DataTypes){
      return sequelize.define('users',{
        idx: {
            type:DataTypes.INTEGER,
            autoIncrement:true, /* 자동 숫자 증가 */
            primaryKey:true,            /* INTEGER */
            allwNull:false        /* 오류감지 */
        },
        user_id: {
            type:DataTypes.STRING(250)         /* ID 데이터 최대 크기 200 */
        },
        user_password:{
             type:DataTypes.STRING(250)      /* PW 데이터 최대 크기 200 */
        },
        user_name:{
             type:DataTypes.STRING(250)
        },
        user_birth:{
          type:DataTypes.STRING(250)
        },
        user_email:{
          type:DataTypes.STRING(250)
        }

      })
}