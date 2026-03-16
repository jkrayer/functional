const { isConstructor } = require('./helpers');
const Left = require('./left');
// 1. https://blog.logrocket.com/elegant-error-handling-with-the-javascript-either-monad-76c7ae4924a1

// This is the "successr case" of Either
function Right(a) {
  if (!isConstructor(this, Right)) return Right.of(a); // Address need for instantiation with "new"

  Object.defineProperty(this, 'v', { value: a, writable: false });
}

Right.of = function of(a) {
  return new Right(a);
};

// Map the function supplied in the supplied either over this value
Right.prototype.ap = function ap(either) {
  const fn = either.v; // might more properly be .chain(identity)
  return this.map(fn);
};

Right.prototype.chain = function chain(fn) {
  return fn(this.v);
};

Right.prototype.join = function join() {
  return (this.v instanceof Right || this.v instanceof Left)
    ? this.v
    : this;
};

Right.prototype.map = function map(fn) {
  return Right.of(fn(this.v));
};

Right.prototype.toString = function toString() {
  return `Right(${this.v.toString()})`;
};
