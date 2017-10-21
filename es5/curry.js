function curry(fn, ar) {
  var arity = ar || fn.length;
  var args = [];

  return function curried(a) {
    if (args.push(a) >= arity) {
      return fn.apply(null, args);
    }
    return curried;
  }
}
