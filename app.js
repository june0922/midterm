const express = require('express');
const helmet = require("helmet");
const mysql = require('mysql2');
const app = express();
const ejs = require("ejs")
const dp = require('./model/db')

 /* veiw engin ejs 사용 */
app.set('veiw engine','ejs');
app.set('views','/views');
app.use('/public',express.static(__dirname + '/public'));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

const mainRouter = require('./router/mainRouter')
app.use('/',mainRouter);

// MySQL 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// EJS 설정
app.set('view engine', 'ejs');
 
// 라우트 설정
app.get('/createaccount', (req, res) => {
    res.render('createaccount');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/page', (req, res) => {
    res.render('page');
});



// 회원가입 라우트
app.post('/create-account', (req, res) => {
    const { id, password, name, birth, email } = req.body;
    const sql = 'INSERT INTO users (id, password, name, birth, email) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [id, password, name, birth, email], (err, result) => {
        if (err) throw err;
        res.send({ success: true });
    });
});

// 아이디 중복 확인 라우트
app.post('/check-id', (req, res) => {
    const { id } = req.body;
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.send({ exists: true });
        } else {
            res.send({ exists: false });
        }
    });
});

// 로그인 라우트
app.post('/login', (req, res) => {
    const { id, password } = req.body;
    const sql = 'SELECT * FROM users WHERE id = ? AND password = ?';
    db.query(sql, [id, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.send({ success: true });
        } else {
            res.send({ success: false, message: 'Invalid credentials' });
        }
    });
});



app.listen(3000,function(req,res){
    db.sequlize.sync({force:false})
    console.log("서버가 실행되고 있다")
})
