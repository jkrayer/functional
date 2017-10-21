function partialApply(fn, ...args) {
  return function(...newArgs) {
    return fn(...(args.concat(newArgs)));
  };
}

function partialApply(fn, ...initialArgs) {
  const ar = fn.length; // save the amount of args the function expects

  return function partial(...args) {
    initialArgs = initialArgs.concat(args); // save new arguments
    if (initialArgs.length >= ar) { // run function if we have them all
      return fn(..initialArgs);
    }
    return partial; // return function if we do not
  };
}
