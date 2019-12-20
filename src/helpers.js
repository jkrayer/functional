/**
 * Test whether the object is an instance of constructor.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
 * @param  {Object}  object
 * @param  {Object}  constructor
 * @return {Boolean}
 */
function isConstructor(object, constructor) {
  return object instanceof constructor;
}

/**
 * True when the passed value is either null or undefined
 * @param  {Any}  a
 * @return {Boolean}
 */
function isNothing(a) {
  return a === null || a === undefined;
}

// const isOwnProperty = Object.prototype.hasOwnProperty.call;

/**
 * Walk the keys of the supplied object and return the value of the last key or
 * undefined if at any point in the search a key does not exist.
 *
 * Note that it is uncommon but possible for the penultimate key to have the value
 * undefined. While I find it bad practice to have [undefined, undefined, ...] or
 * { a: undefined, b: void 0 } your mileage may vary.
 *
 * @param  {Array} keys          valid Object and Array keys
 * @param  {Object|Array} object subject of search
 * @return {Any}                 the value of of the last key || undefined
 */
function path(keys, object) {
  return keys.reduce(
    (acc, key) => (isNothing(acc) || !acc.hasOwnProperty(key) ? undefined : acc[key]),
    object
  );
}

module.exports = {
  isConstructor,
  isNothing,
  path
};
