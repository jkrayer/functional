/**
* Save a reference to a function and return a single arity function until
* the proper amount of arguments are reached
 * @param  {Function} fn
 * @param  {Number}   ar The expected number of arguments
 * @return {Function}
 */
function curry(fn, ar) {
  const arity = ar || fn.length;
  const args = [];

  return function curried(a) {
    if (args.push(a) >= arity) {
      return fn(...args);
    }
    return curried;
  };
}

module.exports = { curry };
