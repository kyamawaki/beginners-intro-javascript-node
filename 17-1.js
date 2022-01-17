// 引数はミリ秒
function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        // 指定時間経過後、result関数を呼び出す
        setTimeout(resolve, ms);
    })
}

promiseTimeout(2000)
    .then(() => {
        console.log('Done!');
        return promiseTimeout(1000);
    }).then(()=> {
        console.log('Also done!');
        return Promise.resolve(42);
    }).then((result)=> {
        console.log(result);
    }).catch(()=> {
        console.log('Error!');
    })