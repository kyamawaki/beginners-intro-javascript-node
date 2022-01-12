// allow function(anonymous function)
// () => {} この形が匿名関数
const add = (a, b) => a + b;
console.log(add(1,2));

const subtract = (a, b) => {
    const result = a - b;
    return result;
}
console.log(subtract(1,1));

// 上はOK.下はNG.
// 中ガッコでくくっているときはreturnが必要
const subtract2 = (a, b) => a - b;
console.log(subtract2(1,1));
const subtract3 = (a, b) => {
    a - b;
}
console.log(subtract3(1,1));
