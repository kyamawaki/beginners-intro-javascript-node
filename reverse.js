
// 文字列反転関数
function reverseString(value) {
    
    // 再代入可能な変数を定義
    let reversedValue = "";

    // value.splitで文字配列を作成
    // 配列から取り出した文字を前に追加する
    // 1) "" + "R"
    // 2) "e" + "R"
    // 3) "v" + "eR"
    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    });

    return reversedValue;
}

console.log(reverseString("Reverse Me"));
