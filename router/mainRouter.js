const express = require('express')
const router = express.Router();

/* req 요청, res응답 : 주소생성*/
router.get("/",function(req,res){
    res.render('login/main')
})

router.get("/about",function(req,res){
    res.send('About Page')
})

/* post 방식 */
router.post("/postapi",function(req,res){
    /* key value */
    let body = req.body;
    console.log(body)
    res.send('POST API')
})

/* 라우터 변수 내보내기 */
module.exports = router