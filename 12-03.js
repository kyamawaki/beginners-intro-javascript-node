console.log("***** Adding data during createion. *****");
let arr1 = ["A", true, 2];
console.log(arr1[0]);
console.log(arr1[1]);

console.log("***** Adding data after createion. *****");
let arrayLength = 2;
let arr2 = Array(arrayLength);
arr2[0] = "Value at Index 0";
console.log(arr2[0]);
console.log(arr2[1]);   // 値なし

console.log("***** Length and index. *****");
console.log(arr1.length);
console.log(arr1[3]);   // Doesn't exist.
console.log(arr1[2]);   // Last index of array
console.log(arr1[arr1.length -1]);   // equals 2

console.log("***** Length and index. Part2 *****");
let arr3 = Array(3);    // Empty array of length 3
arr3[2] = "Adding a value!";
console.log(arr3[2]);   // Last index of array
console.log(arr3[1]);   // No value yet
console.log(arr3[0]);   // No value yet