// allow関数の勉強
var x = () => {return 3;} // 引数なし
console.log(x());
var y = (a, b) => {return a + b;} // 引数あり
console.log(y(2, 3));
setTimeout(() => {console.log("fuga");}, 1000);  // 第一引数に引数なし関数
// ↓と同じ
function test() {
  console.log("fuga");
}
setTimeout(test, 1000);