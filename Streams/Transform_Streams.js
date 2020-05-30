const { Transform } = require('stream');


class ReplaceText extends Transform{
    
    constructor(char){
        super();
        this.replace = char;
    }

    _transform(chunk, encoding, callback){
        const transformChunk = chunk.toString().replace(/[a-z] | [A-Z] | [0-9]/g,this.replace);

        this.push(transformChunk);
        callback();
    }

    _flush(callback){
        this.push('More stuff is being passed');
        callback();
    }
}

const replaceText = new ReplaceText('X');

process.stdin.pipe(ReplaceText).pipe(process.stdout);