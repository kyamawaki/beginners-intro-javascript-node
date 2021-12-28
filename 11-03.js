const testVal = 400;

if (testVal === 200) {
    console.log('OK');
} else if (testVal === 400) {
    console.log('Error');
} else {
    console.log('Unknown status');
}

const testVal2 = 200;
let message = '';
//if (testVal2 === 200) {
//    message = 'ok!';
//} else {
//    message = 'error';
//}

message = (testVal2 === 200) ? 'ok!' : 'error' ;
console.log(message);

const testVal3 = 'hoge';
if (testVal3) {
    console.log('We have a name!');
} else {
    console.log('No name provided');
}

const testVal4 = 500;
switch(testVal4) {
    case 200:
        console.log("ok");
        break;
    case 400:
    case 500:
        console.log("Error!");
        break;
    default:
        console.log("Unkonw status.");
        break;
}
