const { expect } = require('chai');
const sinon = require('sinon');
const wonce = require('../src/once');

require('chai').use(require('sinon-chai'));

describe('wonce', () => {
  it('should return function', () => {
    const cb = sinon.spy();
    const oneTime = wonce(cb);

    expect(oneTime).to.be.an.instanceof(Function);
  });

  it('should execute the supplied function one time', () => {
    const cb = sinon.spy();
    const oneTime = wonce(cb);

    oneTime();
    oneTime();
    oneTime();

    expect(cb).to.have.been.calledOnce;
  });

  it('should execute the supplied function one time each time it is wrapped in wonce', () => {
    const cb = sinon.spy();
    const oneTime = wonce(cb);
    const anotherTime = wonce(cb);

    oneTime();
    anotherTime();
    oneTime();
    anotherTime();

    expect(cb).to.have.been.calledTwice;
  });
});
