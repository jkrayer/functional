/**
 * partialApply creates a closure over the passed function and arguments and
 * returns a function with access to the closure. When the returned function
 * is called it returns the result of the original function with the initial
 * and new arguments applied from left to right.
 *
 * function sum (a, b, c, d, e) {
 *   return a + b + c + d + e;
 * }
 *
 * const c = partialApply(sum, 3); // c is a lambda than can access sum and 3
 * const d = c(1);                 // d is 4
 * const e = c(2);                 // e is 5
 *
 * @param  {Function} fn    a function to save for later
 * @param  {Array}    args  some initial arguments to use with `fn`
 * @return {Function}       a function with access to the closure created by partialApply
 */
function partialApply(fn, ...args) {
  return (...newArgs) => fn(...args.concat(newArgs));
}

module.exports = partialApply;
