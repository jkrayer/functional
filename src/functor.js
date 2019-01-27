const { isConstructor, isNothing } = require('./helpers');

/**
 * The basic functor wraps a value and provides an interface (fmap) for applying
 * functions to the value.
 * In Javascript Array is a functor because it has a method for applying a function
 * to each of the values the array wraps; map.
 *
 * @see https://wiki.haskell.org/Typeclassopedia#Functor
 *    Functors must preserve identity morphisms
 *    Functors preserve composition of morphisms
 * @see https://medium.com/@tzehsiang/javascript-functor-applicative-monads-in-pictures-b567c6415221#e4de
 *      A functor is any type that defines how map (fmap in Haskell) works.
 *
 * 1. Prevent the stored value from being re-assigned like Functor.v = newVal.
 *    Remeber some JS types can still be mutated via methods like Array.push.
 */

/**
 * Creates a new Functor
 * * -> f(*)
 * @class
 */
function Functor(a) {
  if (!isConstructor(this, Functor)) return Functor.of(a); // Address need for instantiation with "new"

  Object.defineProperty(this, 'v', { value: a, writable: false }); // 1.
}

/**
 * Lifts the given value into the Functor
 * @static
 * @param  {Any} a
 * @return {Object}
 */
Functor.of = function(a) {
  return new Functor(a);
};

/**
 * Applies the supplied function to the stored value and returns a new Functor
 * constaining the result.
 * Function -> f(a) -> f(b)
 * @param  {Function} fn
 * @return {Functor}
 * @method
 */
Functor.prototype.map = function(fn) {
  return isNothing(this.v) ? this : Functor.of(fn(this.v));
};

module.exports = Functor;
