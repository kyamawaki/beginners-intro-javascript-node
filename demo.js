// var はブロック外でも使用できる
if (true) {
    var hello = "Hello";
    console.log(hello);
}
hello = "Hello! World.";
console.log(hello);

// let はブロック外では使用できない
if (true) {
    let world = "Hello World.";
    console.log(world);
}
//console.log(world);

// const は値の再代入ができない
const aaron = "Aaron";
console.log(aaron);
//aaron = "Aaron Powell";