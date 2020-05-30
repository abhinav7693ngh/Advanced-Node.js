const delay = (seconds) => new Promise((resolve, reject) => {
    var my = setTimeout(() => {
        console.log(`This is delay of ${seconds}`);
        resolve(`This is resolution of the timeout ${seconds}`);
    }, seconds * 1000);
});

// delay(2)
//     .then(value => {
//         console.log(value);
//     })
//     .catch(err => {
//         console.log(err);
//     });


var some = [delay(2), delay(3), delay(5), delay(1), delay(7)];


Promise.race(some).then(value => {
    console.log(value);
})


console.log('This is synchronous here');