import express from 'express';

const router = express.Router();

// GETリクエスト
router.get('/', (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json({
            userId: "U001",
            userName: "Test Taro"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// POSTリクエスト
router.post('/', (req: express.Request, res: express.Response) => {
    try {
        let name = req.body.name as string
        let age = req.body.age as number

        if (typeof name === 'string') {
            console.log("name: " + name);
        } else {
            console.log("nameの型が不正: " + typeof name);
            throw new Error("nameの型が不正です");
        }

        if (typeof age === 'number') {
            console.log("age: " + age);
        } else {
            console.log("ageの型が不正: " + typeof age);
            throw new Error("ageの型が不正です");
        }

        res.status(200).json({
            message: "ユーザー登録をしました。" + name + "さん" + age + "歳"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

export default router;
