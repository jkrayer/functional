/**
 * Save a function and a list of  arguments. Return a function that takes additional
 * arguments and executes the original function with both the first and second
 * set of argument applied from left to right.
 *
 * const sum = (x, y) => x + y;
 *
 * const add10 = partial(sum, 10);
 * add10(9) // 19
 *
 * @param  {Function} fn    a function to save for later
 * @param  {Array}    args  some initial arguments to use with `fn`
 * @return {Function}       a function that executes over both args
 */
const partial = (fn, ...args) => {
  return (...moreArgs) => fn(...args, ...moreArgs);
}

module.exports = partial;
