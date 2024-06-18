const express = require('express');
const router = express.Router();



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
