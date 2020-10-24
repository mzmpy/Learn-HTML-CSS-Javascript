var worker = new Promise(function worker(resolve, reject) {
    setTimeout(() => resolve("Done!"), 1000);
});

worker.then(
    state => { console.log(state);}
)