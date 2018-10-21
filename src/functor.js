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
 * 2. [] is a functor in JS but could be lifted in to this Functor. To my way of
 *    thinking that is probably unnecessary but its hard to say what data type
 *    might wind up in Functor or a type that implements Functor at a later time.
 * 3. As above {} can be lifted into a Functor and may be in the future but
 *    should it be?
 * 4. Shallow. This implementation does not operate on deeply nested values [[]] or {{}}
 */

/**
 * Creates a new Functor
 * * -> f(*)
 * @class
 */
function Functor(a) {
  if (!isConstructor(this, Functor)) return new Functor(a); // Address need for instantiation with "new"

  Object.defineProperty(this, 'v', { value: a, writable: false }); // 1.
}

/**
 * Applies the supplied function to the stored value and returns a new Functor
 * constaining the result.
 * Function -> f(a) -> f(b)
 * @param  {Function} fn
 * @return {Functor}
 * @method
 */
Functor.prototype.fmap = function(fn) {
  return isNothing(this.v) ? this
    : Array.isArray(this.v) ? new Functor(this.v.map(fn)) // 2. 4.
    : typeof this.v === 'object' ? new Functor(Object.keys(this.v).reduce((a, k) => (a[k] = fn(this.v[k]), a), {})) // 3. 4.
    : new Functor(fn(this.v));
};

/**
 * Clone, named (<$) in Haskell, copies the current functor and replaces the
 * stored value with the supplied value
 * a -> f(b) -> f(a)
 * @param  {*} val
 * @return {Functor}
 */
Functor.prototype.clone = function(val) {
  return Array.isArray(this.v) ? new Functor(this.v.map(a => val)) // 4.
    : typeof this.v === 'object' ? new Functor(Object.keys(this.v).reduce((a, k) => (a[k] = val, a), {})) // 4.
    : new Functor(val);
}

module.exports = Functor;
