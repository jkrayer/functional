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
function isNothing (a) {
  return a === null || a === void 0;
}

module.exports = {
  isConstructor,
  isNothing
};
