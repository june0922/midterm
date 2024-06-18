
var Sequelize = require("sequelize"); /* 대문자에 sequelize 담기 */
var sequelize;                               

sequelize = new Sequelize("LIG","root","744904",           /* 완전체로 sequelize에 넣기  (projectdb이름, 아이디계정, 비밀번호) */
{
    host:"localhost",                                   /* 어디서 */
    port:3306,                                          /* 몇번째 */
    dialect:"mysql",                                /*db종류 mysql  */
    timezone: "+09:00",                      /* 한국시간설정 */
    define: {                                    /* table 설정 */
        charset:"utf8",                            /* 문자지정, 한글사용 */
        collate:"utf8_general_ci",
        timestamps:true,                            /*  시간기록 */
        freezeTableName:true                     /* 이름을 내맘대로 */
    }
})

var db = {};                                  /* mainRouter 로 보내기위한 함수 */
db.users = sequelize.import(__dirname + "/users.js");        /* user.db 가져오기 */

/* db.stat = sequelize.import(__dirname + "/stat.js");        /* stat.db 가져오기 */ 
/*db.quest = sequelize.import(__dirname + "/quest.js");        /* quest.db 가져오기 */


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;