const { CURRY_ERROR_MESSAGE } = require('./errors');

/**
 * Curry is a closure over a function reference that returns a new closure over
 * passed arguments until all of the orginal function's (fn) arguments have been
 * collected. When all of the arguments have been collected curry returns The
 * result of the orginal function with the collected arguments.
 *
 * function sum (a, b, c, d, e) {
 *   return a + b + c + d + e;
 * }
 *
 * const c = curry(sum); // c is a reference to curried inside of a closure create by curry and c
 * const d = c(1);       // d is a reference to curried inside of a closure create by curry and c
 * const e = d(2);       // e is a reference to curried inside of a closure create by curry and c
 * e(3)(4)(5) = 21
 * e(3, 4)(5) = 21
 * e(3)(4, 5) = 21
 * e(3, 4, 5) = 21
 *
 * e is still a reference to curried inside of a closure create by curry and c.
 * e still "remembers" the arguments provided to c and d; 1 and 2 respectively.
 *
 * @param  {Function} fn
 * @param  {Integer}  arity    optional: number of arguments fn expects
 * @return {Function | Result}
 */
function curry(fn, arity = fn.length) {
  if (arity < 1) {
    throw new TypeError(CURRY_ERROR_MESSAGE);
  }

  return (function c(f, ar, ...args) {
    if (args.length >= ar) {
      return f(...args);
    }

    return function curried(...a) {
      return c(f, ar, ...args.concat(a));
    };
  }(fn, arity));
}

module.exports = curry;
