/**
 * Save a function and any provided arguments
 * Return a function that will continue to collect arguments until there are
 * enough to fulfill fn, then invoke fn
 * @param  {Function} fn
 * @return {Function}    a function to be executed at a later time
 */
function partialApply(fn, ...initialArgs) {
  // save the amount of args the function expects
  const ar = fn.length;
  let args = initialArgs;

  return function partial(...newArgs) {
    // save new arguments
    args = args.concat(newArgs);
    // run function if we have all of the arguments
    if (initialArgs.length >= ar) {
      return fn(...initialArgs);
    }
    // return function if we do not
    return partial;
  };
}

module.exports = { partialApply };
