function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function logRunningOperation() {
    // logimc
    return 42;
}

async function run() {
    console.log('Start!');
    await promiseTimeout(2000);

    const response = await logRunningOperation();
    console.log(response);

    console.log('Stop!');
}

run();