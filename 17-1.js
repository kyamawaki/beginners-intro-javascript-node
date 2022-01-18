// 引数はミリ秒
function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        // 指定時間経過後、result関数を呼び出す
        setTimeout(resolve, ms);
    })
}

// MSDNより
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
//
//Promise の状態は以下のいずれかとなります。
//待機 (pending): 初期状態。成功も失敗もしていません。
//履行 (fulfilled): 処理が成功して完了したことを意味します。
//拒否 (rejected): 処理が失敗したことを意味します。
//待機状態のプロミスは、何らかの値を持つ履行 (fulfilled) 状態、
//もしくは何らかの理由 (エラー) を持つ拒否 (rejected) 状態のいずれかに変わります。
//そのどちらとなっても、then メソッドによって関連付けられたハンドラーが呼び出されます。
//対応するハンドラーが割り当てられたとき、既にプロミスが履行または拒否状態になっていても、そのハンドラーは呼び出されます。
//よって、非同期処理とその関連付けられたハンドラーとの競合は発生しません。
//Promise.prototype.then() メソッドと Promise.prototype.catch() メソッドもまた
//プロミスを返すので、これらを連鎖 (chain) させることができます。

promiseTimeout(2000)
    .then(() => {
        console.log('Done!');
        return promiseTimeout(1000);
    }).then(()=> {
        console.log('Also done!');
        // resolveをすぐ呼ぶ
        return Promise.resolve(3000);
    }).then((result)=> {
        console.log(result);
    }).catch(()=> {
        console.log('Error!');
    })

// promissAはresolve(val)を遅延実行するプロキシ
// （プロキシってなんだ？　とりあえずオブジェクトと考える）
const promiseA = new Promise((resolve, reject) => {
    resolve(777);
});

// .then()はresloveの実体
promiseA.then((val => console.log("asynchronous logging has val:", val)));
console.log("immediate logging");
// ログ出力
// immediate logging
// asynchronous logging has val: 777