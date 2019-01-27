/**
 * Save a function in a closure that will run only once on the nth attempt
 * @param  {Function} fn a function to execute one time
 * @param  {Integer}  x  fun the function after this amount of calls
 * @return {Function}    a function that will call the provided function with
 *                       the passed context and arguments
 */
function when(fn, x) {
  let count = x;

  return (...args) => (count -= 1) === 0 ? fn.apply(this, args) : void 0;
}

module.exports = when;
