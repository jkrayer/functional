/**
 * Save a function and any provided arguments
 * Returns a function that will call fn when invoked
 * @param  {Function} fn
 * @return {Function}    a function to be executed at a later time
 */
function partialApply(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function partial() {
    return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
  };
}

module.exports = partialApply;
