/**
 * Save a function in a closure that will only allow it to be called one time
 * @param  {Function} fn a function to execute one time
 * @return {Function}    a function that will call the provided function with
 *                       the passed context and arguments
 */
function once(fn) {
  let isDone = false;

  // eslint-disable-next-line
  return (...args) => (isDone ? undefined : (isDone = true, fn.apply(this, args)));
}

module.exports = once;
