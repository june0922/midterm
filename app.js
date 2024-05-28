/* app 변수에 express 할당 */
const express = require('express');
const app = express();
/* view engine ejs 사용 */
const ejs = require("ejs");
/* helmet (npn 제공 보안) */
const helmet = require("helmet");
app.use(helmet());
/* post방식 api 설정을 위한 내용 */
app.use(express.json());
app.use(express.urlencoded());
/* view engin은 ejs 사용 ,view 파일위치 명시 */
app.set('view engine','ejs');
app.set('views','./views'); 
/* 화면에 필요한 도구들 찾기 위한 내용 */
app.use('/public',express.static(__dirname + '/public'));


/* 메인 라우터에서 주소 받기 */
const mainRouter = require('./router/mainRouter')
app.use('/',mainRouter)

/* 서버 시작 */
app.listen(3000,function(req,res){
    console.log("서버가 실행되고 있다!")
})