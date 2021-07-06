const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);
    const { limit } = options
    this.limit = limit
    this.totalSize = 0
  }

  _transform(chunk, encoding, callback) {
    this.totalSize += chunk.length
    if (this.totalSize > this.limit) throw new LimitExceededError()
    this.push(chunk)
    callback()
  }
}

module.exports = LimitSizeStream;
