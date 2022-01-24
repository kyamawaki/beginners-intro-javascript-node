// JavaScriptは非同期言語（用語合ってる？）
// 実行に時間がかかると実行完了を待たずに次の処理を実行する
//console.log("**** Output ****\n")
//console.log("No. 1");

// 1秒後に実行される
//setTimeout(() => {
//    console.log("No. 2");
//}, 1000);

//console.log("No. 3");

// **** Output ****
// No.1
// No.3
// No.2

////////////////////////////////////////////////////////////
// Promiseを使用してNo.1～3の順に出力する
// 1秒後に実行される
console.log("**** Output ****\n")
console.log("No. 1");
new Promise((resolve) => {
    setTimeout(() => {
        console.log("No. 2");
        resolve();  // 処理が終わったことを伝える
    }, 1000);
}).then(() => {
    // 処理が終わったことで実行される
    console.log("No. 3");
});

// **** Output ****
// No.1
// No.2
// No.3

