/**
 * Save a function and any provided arguments
 * Returns a function that will call fn when invoked
 * @param  {Function} fn
 * @param  {Array}    args
 * @return {Function}      a function to be executed at a later time
 */
function partialApply(fn, ...args) {
  return function partial(...newArgs) {
    return fn(...(args.concat(newArgs)));
  };
}

module.exports = { partialApply };
