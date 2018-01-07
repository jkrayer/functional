const { expect } = require('chai');
const sinon = require('sinon');
const partial = require('../src/partial-apply');

require('chai').use(require('sinon-chai'));

describe('partialApply', () => {
  function sum(a, b) {
    return a + b;
  }

  const sumSpy = sinon.spy(sum);

  it('should return a function', () => {
    const summer = partial(sumSpy, 1);

    expect(summer).to.be.an.instanceof(Function);
    expect(summer(2)).to.equal(3);
    expect(summer(4)).to.equal(5);
  });

  it('should return the original function result', () => {
    expect(partial(sumSpy, 1)(3)).to.equal(4);
    expect(sumSpy).to.have.been.called.with(1, 3);
    expect(partial(sumSpy)(4, 5)).to.equal(9);
    expect(sumSpy).to.have.been.called.with(4, 5);
  });
});
