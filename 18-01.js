// requireはモジュール化されたJavaScriptファイルを読み込む
// モジュールとは機能ごとに分割したjsファイル
// importもモジュールを読み込む方法だが、こちらはES6の仕様でnodeはrequireを使う

// 次の行はdotenvモジュールを呼び出し、configメソッドを使用している
require('dotenv').config();
//console.log(process.env);

// expressモジュールを読み込んで使えるようにする
// ちなみにexpressはNode JS用のアプリケーションフレームワーク
const express = require('express');

// expressアプリケーションを作成
const app = express();
//console.log(app);

// 条件分岐(C#の3項演算子に近い。
// process.env.PORGがnull/emptyでなければPORTを返し、そうでなけれな3000を返す)
const port = process.env.PORT || 3000;
console.log(port);

// http://localhost:portで'Hello World!'を返す
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// http://localhost:port/testで'Hello World! test'を返す
app.get('/test', (req, res) => {
    res.send('Hello World! test');
});

// HTTPリクエストをリッスンする
app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000');
})