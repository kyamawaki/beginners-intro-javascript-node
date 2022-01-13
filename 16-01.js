/***************************************************
 * JavaScript for Beginners
 * JS101 - JSON Demo
 *
 * BASICS    : JSON Format
 * STRINGIFY : Javascript to JSON
 * PARSE     : JSON to JavaScript
 ****************************************************/

// Think of a simple Javascript object with data
const book = new Object({title : "1984", author : "Geroge Orwell"});
console.log("\n ------ ");
console.log(typeof book);
console.log(book);

// You can also have a collection of these objects.
const myBooks = [
    new Object({title : "1984", author : "Geroge Orwell"})
    , new Object({title : "1984", author : "Geroge Orwell"})
    , new Object({title : "1984", author : "Geroge Orwell"})
    , new Object({title : "1984", author : "Geroge Orwell"})
];
console.log("\n ------ ");
console.log(typeof myBooks);
console.log(myBooks);

// JSON.stringify - object input
console.log("\n ------ ");
let bookJSON = JSON.stringify(book);
console.log(typeof bookJSON);
console.log(bookJSON);

// JSON.stringify - collection input
console.log("\n ------ ");
let myBooksJSON = JSON.stringify(myBooks);
console.log(typeof myBooksJSON);
console.log(myBooksJSON);

// JSON.parse - string input
let data = bookJSON;
let parsed = JSON.parse(data);
console.log("\n ------ ");
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: " + parsed.length);

// JSON.parse - string input
//data = myBooksJSON;
//parsed = JSON.parse(data);
parsed = JSON.parse(myBooksJSON);
console.log("\n ------ ");
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: " + parsed.length);