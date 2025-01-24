const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = []; // 仮のデータベース（実際はDBを使用）

app.post("/register", (req, res) => {
    const { phone, password } = req.body;

    // 簡単なバリデーション
    if (!phone || !password) {
        return res.json({ success: false, message: "すべてのフィールドを入力してください。" });
    }
    if (phone.length < 10 || password.length < 6) {
        return res.json({ success: false, message: "電話番号は10桁以上、パスワードは6文字以上必要です。" });
    }

    // 仮のユーザー登録処理
    users.push({ phone, password });
    res.json({ success: true, message: "登録成功！" });
});

// サーバー起動
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`サーバーが http://localhost:${PORT} で起動しました`);
});
