const fs = require('fs');


const readStream = fs.createReadStream('./sample.mp4');

readStream.on('data', (chunk) => {
    console.log(chunk.length);
});

readStream.on('end', () => {
    console.log('Finished');
});

readStream.on('error', () => {
    console.log('Error occured');
});

readStream.pause();

process.stdin.on('data', chunk => {
    readStream.read();
});