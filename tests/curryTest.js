const expect = require('chai').expect;
const sinon = require('sinon');
const curry = require('../src/curry');

require('chai').use(require('sinon-chai'));

describe('curry', () => {
  const applyFns = [curry];

  function sum(a, b) {
    return a + b;
  }

  function sumAll(...args) {
    return args.reduce(function(acc, val) {
      return acc + val;
    }, 0);
  }

  applyFns.forEach(function(fn) {
    const sumSpy = sinon.spy(sum);
    const sumAllSpy = sinon.spy(sumAll);

    it(fn.name + ' should return a function with an arity of 1', () => {
      const curriedSum = fn(sumSpy);
      const one = curriedSum(1);

      expect(curriedSum).to.be.an.instanceof(Function);
      expect(curriedSum.length).to.equal(1);
      expect(one).to.be.an.instanceof(Function);
      expect(one.length).to.equal(1);
    });

    it(fn.name + ' should return the original function result', () => {
      expect(fn(sumSpy)(1)(3)).to.equal(4);
      expect(sumSpy.calledWith(1, 3)).to.be.true;
    });

    it(fn.name + ' should return the original function result when all expected args are supplied', () => {
      expect(fn(sumSpy)(1)(3)).to.equal(4);
    });

    it(fn.name + ' should handle multi-variate functions', () => {
      expect(fn(sumAll, 5)(1)(2)(3)(4)(5)).to.equal(15);
      expect(fn(sumAll, 3)(1)(3)(5)).to.equal(9);
    });
  });
});
