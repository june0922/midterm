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

router.get('/page', async (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
        return res.redirect('/login');
    }

    try {
        const stats = await db.stats.findOne({ where: { id: userId } });
        const quests = await db.quests.findOne({ where: { id: userId } });

        res.render('page', { userId, stats, quests });
    } catch (error) {
        console.error(error);
        res.redirect('/login');
    }
});


// 아이디 중복 확인
router.post('/check-id', async (req, res) => {
    const { id } = req.body;
    try {
        const user = await db.users.findOne({ where: { id } });
        if (user) {
            res.json({ exists: true });
        } else {
            res.json({ exists: false });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// 회원가입 요청 처리
router.post('/create-account', async (req, res) => {
    const { id, password, name, birth, email } = req.body;
    try {
        // 유저 생성
        const user = await db.users.create({ id, password, name, birth, email });

        // 유저 스탯 생성
        await db.stats.create({
            id: user.id,
            level: 1,
            experience: 0,
            expToNextLevel: 1,
            str: 0,
            dex: 0,
            int: 0,
            luk: 0
        });

        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


// 로그인 요청 처리
router.post('/data/login', async (req, res) => {
    const { id, password } = req.body;
    try {
        const user = await db.users.findOne({ where: { id, password } });
        if (user) {
            req.session.userId = user.id; // 세션에 유저 ID 저장
            res.json({ success: true, name: user.name });
        } else {
            res.json({ success: false, message: '아이디 또는 비밀번호가 잘못되었습니다.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// 유저 스탯 가져오기
router.get('/data/stats', async (req, res) => {
    const userId = req.session.userId; // 세션에서 유저 ID 가져오기
    try {
        const stats = await db.stats.findOne({ where: { id: userId } });
        if (stats) {
            res.json({ success: true, stats });
        } else {
            res.json({ success: false, message: '유저 스탯을 찾을 수 없습니다.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/addQuest', async (req, res) => {
    const { userId, questTitle, questText, stat, grade, date } = req.body;

    try {
        // 현재 퀘스트 번호 찾기
        const questCount = await db.quests.count({ where: { userId: userId } });
        const questNumber = questCount + 1;

        // 새로운 퀘스트 생성
        await db.quests.create({
            userId,
            questNumber,
            questTitle,
            questText,
            stat,
            grade,
            date,
            totalQuests: questCount + 1,
            inProgressQuests: questCount + 1,
            progress: 0
        });

        res.json({ success: true });
    } catch (error) {
        console.error('Error adding quest:', error);
        res.json({ success: false, message: 'Error adding quest.' });
    }
});

// 로그아웃 처리
router.post('/data/logout', async (req, res) => {
    const userId = req.session.userId;
    const { stats, quests } = req.body;

    try {
        await db.stats.update(stats, { where: { id: userId } });
        await db.quests.update(quests, { where: { id: userId } });

        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ success: false, message: '로그아웃에 실패했습니다.' });
            }
            res.json({ success: true });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
});

/* 데이터 베이스 체크용 */
router.post("/data/read", function (req, res) {
    db.users.findAll().then(function (result) {
        res.send({ success: 200, data: result })
    })
})
/* 데이터 베이스 체크용 */
router.post("/data/read", function (req, res) {
    db.stat.findAll().then(function (result) {
        res.send({ success: 200, data: result })
    })
})

/* 데이터 베이스 체크용 */
router.post("/data/read", function (req, res) {
    db.quest.findAll().then(function (result) {
        res.send({ success: 200, data: result })
    })
})


module.exports = router;

/* 



router.get("/data/create", function (req, res) {
    let id = parseInt(Math.random() * 10000)
    db.users.create({ id: id }).then(function (result) {
        res.send({ success: 200 })
    })
})



router.post("/data/update", function (req, res) {

    let target_id = req.body.target_id;
    db.users.update({ id: 9999 }, { where: { id: target_id } }).then(function
        (result) {
        res.send({ success: 200 })
    })
})

router.post("/data/delete", function (req, res) {
    let target_id = req.body.target_id;
    db.users.destroy({ where: { id: target_id } }).then(function (result) {
        res.send({ success: 200 })
    })
})

 */
