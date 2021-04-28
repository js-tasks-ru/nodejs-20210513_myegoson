function sum(a, b) {
  Array.from(arguments).map(item => !Number.isFinite(item) && (() => {throw new TypeError('Some argument is not a number')})())
  return a + b;
}

module.exports = sum;
