const { createReadStream, createWriteStream } = require('fs');


const readStream = createReadStream('./sample.mp4');
const writeStream = createWriteStream('./copy.mp4');

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

readStream.on('end', () => {
    writeStream.end();
});

readStream.on('error', () => {
    console.log('Error occured');
});

writeStream.on('close', () => {
    process.stdout.write('File copied\n');
    process.stdout.end();
})