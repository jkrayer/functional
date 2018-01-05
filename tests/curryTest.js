const expect = require('chai').expect;
const sinon = require('sinon');
const curry = require('../src/curry');
const CURRY_ERROR_MESSAGE = require('../src/errors').CURRY_ERROR_MESSAGE;

require('chai').use(require('sinon-chai'));

describe('curry', () => {

  function sumAll(...args) {
    return args.reduce(function(acc, val) {
      return acc + val;
    }, 0);
  }

  const sumAllSpy = sinon.spy(sumAll);

  it('should return functions until all arguments are supplied', () => {
    const curriedSum = curry(sumAllSpy, 2);
    const curriedSum2 = curriedSum(1);

    expect(curriedSum).to.be.an.instanceof(Function);
    expect(curriedSum.name).to.equal('curried');
    expect(curriedSum2).to.be.an.instanceof(Function);
    expect(curriedSum2.name).to.equal('curried');
    expect(curriedSum2(2)).to.equal(3);
  });

  it('should return the original function result when the number of expected arguments is supplied', () => {
    const curriedSum = curry(sumAll, 3);

    expect(curriedSum(1)(2)(3)).to.equal(6);
    expect(curriedSum(1, 2)(3)).to.equal(6);
    expect(curriedSum(1)(2, 3)).to.equal(6);
    expect(curriedSum(1, 2, 3)).to.equal(6);
  });

  it('should handle multi-variate functions', () => {
    expect(curry(sumAll, 5)(1)(2)(3)(4)(5)).to.equal(15);
    expect(curry(sumAll, 3)(1)(3)(5)).to.equal(9);
  });

  it('should throw an error when the supplied function has an arity < 1', () => {
    expect(() => curry(sumAll)).to.throw(CURRY_ERROR_MESSAGE);
  });
});
