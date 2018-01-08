/* eslint-disable no-underscore-dangle */

/**
 * Store any value that MAY BE `undefined` or `null` and use the attached methods
 * to safely apply functions to the value. Use `Maybe` anywhere a null check
 * would make sense.
 *
 * @example Replace this:
 * let val = 'value that may be null or undefined';
 * if (val) { val = changeVal(val); }
 * With this:
 * let val = Maybe.of('value that may be null or undefined').flatMap(changeVal);
 * @type {[type]}
 */
class Maybe {
  constructor(val) {
    this._v = val;
  }

  /**
   * Returns a new Maybe of the supplied `value` argument
   *
   * @param  {Any} value type to store in `Maybe`
   * @return {Object}    New Maybe
   */
  static of(val) {
    return new Maybe(val);
  }

  /**
   * Determines if the stored value is `null` or `undefined`
   *
   * @return {Boolean}
   */
  isNothing() {
    return this._v === null || typeof this._v === 'undefined';
  }

  /**
   * Apply the supplied function to the stored value and return a Maybe of the result
   *
   * @param  {Function} fn function to apply against the stored value
   * @return {Object}      Maybe
   */
  map(fn) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this._v));
  }

  /**
   * Apply the supplied function to the stored value and return the result
   *
   * @param  {Function} fn function to apply against the stored value
   * @return {Any}
   */
  flatMap(fn) {
    return this.isNothing() ? null : fn(this._v);
  }

  /**
   * Return the value contained in this Maybe or the passed default if this
   * contains nothing
   *
   * @param  {Any} def
   * @return {Any}
   */
  orElse(def) {
    return this.isNothing() ? def : this._v;
  }

  /**
   * Apply the function contained in this Maybe to the value contained in the
   * passed Maybe and return a maybe of the result.
   *
   * @param  {Maybe} m  A Maybe of a value
   * @return {Maybe}
   */
  apply(m) {
    return !m.isNothing() && !this.isNothing()
      ? Maybe.of(this._v(m.flatMap(x => x)))
      : Maybe.of(null);
  }
}

module.exports = Maybe;

/* eslint-enable no-underscore-dangle */
