function partialApply(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
  };
}

function partialApply(fn) {
    var initialArgs = Array.prototype.slice.call(arguments, 1); // save all args after the first as an array
    var ar = fn.length; // save the amount of args the function expects

    return function partial() {
        initialArgs = initialArgs.concat(Array.prototype.slice.call(arguments)); // save new arguments
        if (initialArgs.length >= ar) { // run function if we have them all
            return fn.apply(null, initialArgs);
        }

        return partial; // return function if we do not
    };
}
