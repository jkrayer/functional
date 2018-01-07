const { PIPE_ERROR_MESSAGE } = require('./errors');

/**
 * Pipe saves an array of functions and returns a unary function. When the
 * returned function is called the functions are applied to the value from
 * left to right.
 * @param  {[type]} fns Array of unary functions
 * @return {[type]}     A unary function
 */
function pipe(...fns) {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new TypeError(PIPE_ERROR_MESSAGE);
  }

  return a => fns.reduce((acc, fn) => fn(acc), a);
}

module.exports = pipe;
