const { expect } = require('chai');
const curry = require('../src/curry');

require('chai').use(require('sinon-chai'));

describe('curry', () => {
  const sum = curry((a, b, c) => a + b + c);

  function sumAll(...args) {
    return args.reduce((acc, n) => acc + n, 0);
  }

  it('should return functions until all args are gathered', () => {
    expect(sum).to.be.an.instanceof(Function);
    expect(sum(1)).to.be.an.instanceof(Function);
    expect(sum(1)(2)).to.be.an.instanceof(Function);
    expect(sum(1)(2)(3)).to.equal(6);
  });

  it('should not require butted braces ()()', () => {
    expect(sum(1, 2)).to.be.an.instanceof(Function);
    expect(sum(1, 2, 3)).to.equal(6);
  });

  it('should return a value when all arguments are gathered', () => {
    expect(sum(1, 2, 3)).to.equal(6);
    expect(sum(1, 2)(3)).to.equal(6);
    expect(sum(1)(2)(3)).to.equal(6);
  });

  it('should throw if arity is < 1', () => {
    expect(() => curry(sumAll)).to.throw('curry expects the provided function to have at least one argument, or set arity explicity');
  });

  it('should complete the function when the provided number of argument is met', () => {
    const sumFour = curry(sumAll, 4);
    const sumFive = curry(sumAll, 5);

    expect(sumFour(1)(2)(3)(4)).to.equal(10);
    expect(sumFive(1)(2)(3)(4)(5)).to.equal(15);
  });
});
