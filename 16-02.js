// let's define a simple object(with no properies or methods)
const blank = {};
console.log("Blank type:", typeof blank);
console.log("Blank value:", blank);

// Let's define an object with PROPERTIES
const book = {
    title: "1984"
    , author: "Geroge Orwel"
    , isAvailable: false
};
console.log("book type:", typeof book);
console.log("book value:", book);

// Let's add actions we can take on it
// Note that these are properties too -- defined as functions
// カンマが前にあるとcheckIn:でエラーになる。後ろにつけないとまずいみたい。
const bookData = {
    title: "1984",
    author: "Geroge Orwel",
    isAvailable: false,
    checkIn: function() {this.isAvailable = true;},
    checkOut: function() {this.isAvailable = false;}
};
const book2 = new Object(bookData);
console.log("book type:", typeof book2);
console.log("book value:", book2);

// access methods and properties
console.log("\n **** use method ****")
book2.checkIn();
console.log("book value:", book2);

console.log("\n **** use property ****")
book2.author = "G. Orwel";
console.log("book value:", book2);

console.log("\n **** use bracket notation ****")
book2["checkOut"]();
console.log("book value:", book2);

// Let's talk about "this"
const bookObj = {
    something : "hohoho",
    checkIn: function() {
        return this;
    }
}
// かっこを使わないと関数の中身が表示される
console.log("\n\nthis is: ", bookObj.checkIn);
// かっこを使うと関数が実行される
console.log("\n\nthis is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === bookObj);

// オブジェクトでないthisはglobalである
function anotherCheckIn() {
    return this;
}
console.log("\n\nthis is: ", anotherCheckIn());
console.log(anotherCheckIn() === global);
