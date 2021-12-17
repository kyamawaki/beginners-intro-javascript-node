const people = ["Aaron", "Mel", "Jhon"];
const one = 1;
const str = "Hello World!";
const b = true;
const person = {
    firstName : "Aaron",
    lastName : "Powel",
};

function sayHello(person) {
    console.log("Hello " + person.firstName);
}

console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

// primitiveな型(string、number、boolean)はinstanceofを持たないのでエラーになる
// 参考）https://stackoverflow.com/questions/29753713/why-is-true-instanceof-boolean-equal-to-false-in-javascript
console.log("-- instanceof --");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);
