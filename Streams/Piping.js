const { createReadStream, createWriteStream } = require('fs');


const readStream = createReadStream('./sample.mp4');

const writeStream = createWriteStream('./copy.mp4');

readStream.pipe(writeStream).on('error', () => {
    console.log('Error');
});