const expect = require('chai').expect;
const sinon = require('sinon');
const partial = require('../src/partial-apply-simple');

require('chai').use(require('sinon-chai'));

describe('simple partialApply', () => {
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
});
