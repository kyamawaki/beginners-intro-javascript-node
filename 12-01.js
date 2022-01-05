// 配列にはどんな要素も入れられる
let arr1 = ["A", true, 2];
console.log(arr1);

// pushの戻り値（要素数）が出力される
console.log("\n==== push/pop ====");
console.log(arr1.push("new value"));
console.log(arr1);
console.log(arr1.pop());    // remove last item
console.log(arr1);

// unshiftは要素を先頭に追加
console.log("\n==== shift/unshift ====");
console.log(arr1.unshift("new value"));
console.log(arr1);
// shiftは先頭要素を削除
console.log(arr1.shift());
console.log(arr1);

console.log("\n==== concat ====");
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1,2,3]);
console.log(arr1);
console.log(arr2);
console.log(newArr);
console.log(newArr2);