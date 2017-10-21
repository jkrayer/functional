function curry(fn, ar) {
  let arity = ar || fn.length;
  let args = [];

  return function curried(a) {
    if (args.push(a) >= arity) {
      return fn(...args);
    }
    return curried;
  }
}
