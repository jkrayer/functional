const expect = require('chai').expect;
const sinon = require('sinon');
const curry = require('../src/curry');

require('chai').use(require('sinon-chai'));

describe('curry', () => {

  function sum(a, b) {
    return a + b;
  }

  function sumAll(...args) {
    return args.reduce(function(acc, val) {
      return acc + val;
    }, 0);
  }

  const sumSpy = sinon.spy(sum);
  const sumAllSpy = sinon.spy(sumAll);

  it('should return a function with an arity of 1', () => {
    const curriedSum = curry(sumSpy);
    const one = curriedSum(1);

    expect(curriedSum).to.be.an.instanceof(Function);
    expect(curriedSum.length).to.equal(1);
    expect(one).to.be.an.instanceof(Function);
    expect(one.length).to.equal(1);
  });

  it('should return the original function result', () => {
    expect(curry(sumSpy)(1)(3)).to.equal(4);
    expect(sumSpy.calledWith(1, 3)).to.be.true;
  });

  it('should return the original function result when all expected args are supplied', () => {
    expect(curry(sumSpy)(1)(3)).to.equal(4);
  });

  it('should handle multi-variate functions', () => {
    expect(curry(sumAll, 5)(1)(2)(3)(4)(5)).to.equal(15);
    expect(curry(sumAll, 3)(1)(3)(5)).to.equal(9);
  });
});
