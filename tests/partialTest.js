const expect = require('chai').expect;
const sinon = require('sinon');
const partial = require('../src/partial-apply');

require('chai').use(require('sinon-chai'));

describe('partialApply', () => {
  const applyFns = [partial];

  function sum(a, b) {
    return a + b;
  }

  applyFns.forEach(function(fn) {
    const sumSpy = sinon.spy(sum);

    it(fn.name + ' should return a function', () => {
      expect(fn(sumSpy, 1)).to.be.an.instanceof(Function);
    });

    it(fn.name + ' should return the original function result', () => {
      expect(fn(sumSpy, 1)(3)).to.equal(4);
      expect(sumSpy.calledWith(1, 3)).to.be.true;
    });

    it(fn.name + ' should return the original function result when all expected args are supplied', () => {
      expect(fn(sumSpy)(1)(3)).to.equal(4);
      expect(fn(sumSpy)()(3)()(3)).to.equal(6);
    });
  });
});
