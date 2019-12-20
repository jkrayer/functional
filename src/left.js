const { isConstructor } = require('./helpers');
// 1. https://blog.logrocket.com/elegant-error-handling-with-the-javascript-either-monad-76c7ae4924a1

// This is the "error case" of Either
function Left(a) {
  if (!isConstructor(this, Left)) return Left.of(a); // Address need for instantiation with "new"

  Object.defineProperty(this, 'v', { value: a, writable: false }); // 1.
}

Left.of = function of(a) {
  return new Left(a);
};

Left.prototype.ap = function ap() {
  return this;
};

Left.prototype.chain = function chain() {
  return this;
};

Left.prototype.join = function join() {
  return this;
};

Left.prototype.map = function map() {
  return this;
};

Left.prototype.toString = function toString() {
  return `Left(${this.v.toString()})`;
};
