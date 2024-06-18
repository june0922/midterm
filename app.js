
const express = require('express');
const session = require('express-session');
const helmet = require("helmet");
const app = express();
const ejs = require("ejs")
const mysql = require('mysql2');
const db = require('./model/db');

 /* veiw engin ejs 사용 */
app.set('view engine','ejs');
app.set('views','./views');
app.use('/public',express.static(__dirname + '/public'));
/* helmet 최소보안 */
/* app.use(helmet()); */
/* post 용 */
app.use(express.json());
app.use(express.urlencoded());

// 세션 미들웨어 설정
app.use(session({
    secret: 'asdf',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // HTTPS를 사용하는 경우 true로 설정
  }));

const mainRouter = require('./router/mainRouter')
app.use('/',mainRouter);



app.listen(3000,function(req,res){
    /* db 접속 true 초기화  */
    db.sequelize.sync({force:true})
    console.log("서버가 실행되고 있다")
})

