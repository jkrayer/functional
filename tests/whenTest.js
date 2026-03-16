const { expect } = require('chai');
const sinon = require('sinon');
const when = require('../src/when');

require('chai').use(require('sinon-chai'));

describe('when', () => {
  it('should return function', () => {
    const cb = sinon.spy();
    const w = when(cb, 1);

    expect(w).to.be.an.instanceof(Function);
  });

  it('should execute the supplied function one time after 2 tries', () => {
    const cb = sinon.spy();
    const w = when(cb, 2);

    w();

    expect(cb).to.not.have.been.called;

    w();
    w();

    expect(cb).to.have.been.calledOnce;
  });

  it('should execute the supplied function one time each time it is wrapped in when', () => {
    const cb = sinon.spy();
    const wOne = when(cb, 1);
    const wTwo = when(cb, 1);

    wOne();
    wTwo();
    wOne();
    wTwo();

    expect(cb).to.have.been.calledTwice;
  });
});
