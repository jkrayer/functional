/**
 * Return a function until all the arguments required by `fn` have been gathered
 * into `args` then return the result of `fn` called with `args`
 * This method is non-strict. Each returned function will accept multiple
 * arguments rather than just one.
 * @param  {Function} fn
 * @param  {Integer}  arity    optional: number of arguments fn expects
 * @return {Function | Result}
 */
function curry(fn, arity) {
  const ar = arity || fn.length;

  if (ar < 1) {
    throw new TypeError('curry expects the provided function to have at least one argument, or set arity explicity');
  }

  return function curried(...args) {
    if (args.length >= ar) {
      return fn(...args);
    }

    return (...a) => curried(...args.concat(a));
  };
}

module.exports = curry;
