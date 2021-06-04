const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.buffer = []
  }

  _transform(chunk, encoding, callback) {
    const string = chunk.toString()
    const stringArray = string.split(os.EOL)
    console.log(stringArray.length)
    stringArray.forEach(item => {
      this.push(item)
    })


    callback()
  }

  _flush(callback) {
    callback(null)
  }
}

module.exports = LineSplitStream;
