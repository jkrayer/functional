/**
 * Store any value that MAY BE `undefined` or `null` and use the attached methods
 * to safely apply functions to the value. Use `Maybe` anywhere a null check
 * would make sense.
 * @example Replace this:
 * let val = 'value that may be null or undefined';
 * if (val) { val = changeVal(val); }
 * With this:
 * let val = Maybe.of('value that may be null or undefined').flatMap(changeVal);
 * @type {[type]}
 */
class Maybe {
  constructor(value) {
    this.value = value;
  }

  /**
   * Returns a new Maybe of the supplied `value` argument
   * @param  {Any} value type to store in `Maybe`
   * @return {Object}    New Maybe
   */
  static of(value) {
    return new Maybe(value);
  }

  /**
   * Determines if the stored value is `null` or `undefined`
   * @type {Boolean}
   */
  isNothing() {
    return this.value === null || typeof this.value === 'undefined';
  }

  /**
   * Apply the supplied function to the stored value and return a new Maybe
   * of the result
   * @param  {Function} fn function to apply against the stored value
   * @return {Object}      Maybe
   */
  map(fn) {
    if (this.isNothing()) {
      return Maybe.of(null);
    }

    return Maybe.of(fn(this.value));
  }

  /**
   * Apply the supplied function to the stored value and return the result
   * @param  {Function} fn function to apply against the stored value
   * @return {Any}
   */
  flatMap(fn) {
    if (this.isNothing()) {
      return null;
    }

    return fn(this.value);
  }

  /**
   * Get the stored value
   * @return {Any}
   */
  join() {
    return this.value;
  }
}

module.exports = Maybe;

/**
 * Discussion:
 * AFAIK a `Maybe` in true FP would return either a `Just` or a `Nothing`
 * depending on the value supplied in the constructor. This `Maybe` does
 * not wrap the value in additional constructs but may in the future.
 */
