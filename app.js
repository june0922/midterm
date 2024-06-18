const express = require('express');
const helmet = require("helmet");
const app = express();
const ejs = require("ejs")
const mysql = require('mysql2');
const db = require('./model/db');


 /* veiw engin ejs 사용 */
app.set('veiw engine','ejs');
app.set('views','/views');
app.use('/public',express.static(__dirname + '/public'));
/* helmet 최소보안 */
app.use(helmet());
/* post 용 */
app.use(express.json());
app.use(express.urlencoded());


const mainRouter = require('./router/mainRouter')
app.use('/',mainRouter);



app.listen(3000,function(req,res){
    /* db 접속 false 업데이트 true 초기화  */
    db.sequelize.sync({force:false})
    console.log("서버가 실행되고 있다")
})

