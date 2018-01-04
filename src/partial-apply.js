/**
 * Save a function and any provided arguments. Return a function that can take
 * additional arguments. The returned function executes `fn` with all provided
 * arguments in order from left to right.
 * @param  {Function} fn    a function to save for later
 * @param  {Array}    args  some or all of the arguments to use with `fn`
 * @return {Function}       a closure with access to `fn` and `args`
 */
function partialApply(fn, ...args) {
  return (...newArgs) => fn(...(args.concat(newArgs)));
}

module.exports = partialApply;
