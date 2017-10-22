/**
 * Save a function and any provided arguments
 * Return a function that will continue to collect arguments until there are
 * enough to fulfill fn, then invoke fn
 * @param  {Function} fn
 * @return {Function}    a function to be executed at a later time
 */
function partialApply(fn) {
  // save all args after the first as an array
  var initialArgs = Array.prototype.slice.call(arguments, 1);
  // save the amount of args the function expects
  var ar = fn.length;

  return function partial() {
    // save new arguments
    initialArgs = initialArgs.concat(Array.prototype.slice.call(arguments));
    // run function if we have all of the arguments
    if (initialArgs.length >= ar) {
      return fn.apply(null, initialArgs);
    }
    // return function if we do not
    return partial;
  };
}

module.exports = { partialApply };
