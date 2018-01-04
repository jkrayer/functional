const expect = require('chai').expect;
const sinon = require('sinon');
const partial6 = require('../es6/partial-apply-simple');

require('chai').use(require('sinon-chai'));

describe('simple partialApply', () => {
  function sum(a, b) {
    return a + b;
  }

  [partial6].forEach(function(fn) {
    const sumSpy = sinon.spy(sum);

    it(fn.name + ' should return a function', () => {
      expect(fn(sumSpy, 1)).to.be.an.instanceof(Function);
    });

    it(fn.name + ' should return the original function result', () => {
      expect(fn(sumSpy, 1)(3)).to.equal(4);
      expect(sumSpy.calledWith(1, 3)).to.be.true;
    });
  });
});
