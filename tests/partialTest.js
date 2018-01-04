const expect = require('chai').expect;
const sinon = require('sinon');
const partial = require('../src/partial-apply');

require('chai').use(require('sinon-chai'));

describe('partialApply', () => {

  function sum(a, b) {
    return a + b;
  }

  const sumSpy = sinon.spy(sum);

  it('should return a function', () => {
    expect(partial(sumSpy, 1)).to.be.an.instanceof(Function);
  });

  it('should return the original function result', () => {
    expect(partial(sumSpy, 1)(3)).to.equal(4);
    expect(sumSpy.calledWith(1, 3)).to.be.true;
  });

  it('should return the original function result when all expected args are supplied', () => {
    expect(partial(sumSpy)(1)(3)).to.equal(4);
    expect(partial(sumSpy)()(3)()(3)).to.equal(6);
  });
});
