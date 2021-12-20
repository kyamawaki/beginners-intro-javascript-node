let num1='150';
let flo1='1.50';

console.log("********Converting strings to integers********");
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0x0F'));  // Hex

console.log("********Converting strings to float********");
console.log(parseFloat('100'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));
console.log(parseFloat('0x0F'));  // Hex
// parseFloat('0x0F')の出力は0になる。
// なぜならparseFloatは先頭の文字から数値でない文字が現れるまでを浮動小数点に変換するから。
// 数値でない文字＝数字、.(ドット)、e/E以外

console.log("********More Conversion Examples********");
//More Conversion Examples
//Numbers after special characters are ignored
console.log(parseInt('1.5')); 
console.log(parseInt('1 + 1'));
// parseInt('1+1')の出力は1になる。
// 途中の'+'は数値でないのでそれまでの文字を数値に変換した値を返す
console.log(parseInt('-123 + 1'));
// parseInt('-123+1')の出力は-123になる。

console.log("********Converting numbers to strings********");
//Converting numbers to strings
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());