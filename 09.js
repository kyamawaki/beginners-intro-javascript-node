// わざと例外を発生させる
function criticalCode() {
    throw "throwing an exception.";
}

// エラーログ出力
function logError(theException) {
    console.log(theException);
}

// ただ例外をスローする
//console.log("***** Throing Exceptions. ****");
//throw 'myException';
//throw true;

// try catch
console.log("***** Throing in Try ... Catch. ****");
try{
    throw "An exception that is thrown every time.";
} catch (ex) {
    console.log("Got an error.");
    logError(ex);
}

// try catch finaly
// finallyは例外が出なくても実行される
console.log("***** Throing in Try ... Catch..Finaly. ****");
try {
    //criticalCode();
} catch(ex) {
    console.log("Got an error.");
    logError(ex);
} finally {
    console.log("Code that always will run.");
}
