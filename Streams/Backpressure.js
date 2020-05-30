const { createReadStream, createWriteStream } = require('fs');


const readStream = createReadStream('./sample.mp4');
const writeStream = createWriteStream('./copy.mp4',{
    highWaterMark : 20
});

readStream.on('data', (chunk) => {
    const result = writeStream.write(chunk);
    if(!result){
        console.log('Backpressure');
        readStream.pause();
    }
});

readStream.on('end', () => {
    writeStream.end();
});

readStream.on('error', () => {
    console.log('Error occured');
});

writeStream.on('drain', () => {
    console.log('drained');
    readStream.resume();
});

writeStream.on('close', () => {
    process.stdout.write('File copied\n');
    process.stdout.end();
});