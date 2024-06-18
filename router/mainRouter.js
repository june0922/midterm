const express = require("express");
const router = express.Router();
const db = require('../model/db');


// 라우트 설정

router.get('/', (req, res) => {
    res.render('login');
});


router.get('/login', (req, res) => {
    res.render('login');
});


router.get('/createaccount', (req, res) => {
    res.render('createaccount');
});

router.get('/page', (req, res) => {
    res.render('page');
});


router.get("/data/create", function(req,res){
    let user_id = parseInt(Math.random() * 10000)
    db.users.create({user_id:user_id}).then(function(result){
        res.send({success:200})
    })
})

router.get("/data/read",function(req,res){
    db.users.findAll().then(function(result){
        res.send({success:200, data:result})
    })
})

router.post("/data/update",function(req,res){

    let target_id = req.body.target_id;
    db.users.update({user_id:9999},{where:{user_id:target_id}}).then(function
        (result){
            res.send({success:200})
    })
})
module.exports =router;