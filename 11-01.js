const value = 500;

if (value === 200) {
    console.log('ok!');
} else if (value === 400 || value === 500) {
    console.log('Error');
} else {
    console.log('Unknown value');
}

// '==='は厳密等価演算子。'=='は等価演算子
// 等価演算子はオペランドの方が異なる場合、同じ型に変換しようとするが
// 厳密等価演算子は変換を行わない。（オペランドの型が異なる場合はエラーになる）
console.log('2' == 2);  // 文字列を数値に変換して比較する（仕様によると文字列に変換ではないらしい。）
console.log('2' === 2); // オペランドの方が異なる

// typescriptのエラーチェックによりstatusはwindows.status（非推奨）らしい
const status = 200;
if (status === 200) {
    console.log('ok!');
}
