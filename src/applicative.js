const { isConstructor } = require('./helpers');

/**
 * The applicative allows a function lifted into the context to be applied to a
 * value also lifted into the context.
 *
 * @see https://wiki.haskell.org/Typeclassopedia#Applicative
 * @see https://fsharpforfunandprofit.com/posts/elevated-world/?utm_source=share&utm_medium=ios_app&utm_name=iossmf#the-apply-function
 * Stack overflow ftw about composition
 * @see https://stackoverflow.com/questions/356950/what-are-c-functors-and-their-uses
 */

/**
 * [Applicative description]
 * @param       {[type]} a [description]
 * @constructor
 */
function Applicative(a) {
  // Address need for instantiation with "new"
  if (!isConstructor(this, Applicative)) return Applicative.of(a);

  Object.defineProperty(this, 'v', { value: a, writable: false }); // 1.
}

/**
 * [description]
 * @param  {[type]} a [description]
 * @return {[type]}   [description]
 */
Applicative.of = function (a) {
  return new Applicative(a);
};

/**
 * Applies the supplied function to the stored value and returns a new
 * Applicative constaining the result.
 * Function -> applicative(a) -> applicative(b)
 * @param  {Function} fn
 * @return {Functor}
 * @method
 */
Applicative.prototype.map = function map(fn) {
  return Applicative.of(fn(this.v));
};

/**
 * [description]
 * @return {[type]} [description]
 */
Applicative.prototype.toString = function toString() {
  return `Applicative.of(${this.v})`;
};

/**
 * Apply a function stored in Applicative to a value stored in a supplied Applicative
 * @param  {[type]} functor [description]
 * @return {[type]}         [description]
 */
Applicative.prototype.app = function (functor) {
  return Applicative.of(
    typeof this.v === 'function' ? this.v(functor.v) : functor.v(this.v)
  );
};

module.exports = Applicative;
