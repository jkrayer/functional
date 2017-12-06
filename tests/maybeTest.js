const { expect } = require('chai');
const Maybe = require('../src/Maybe');

require('chai').use(require('sinon-chai'));

describe('Maybe', () => {
  it('calling maybe with `new` should instantiate a new object', () => {
    const m = new Maybe('foo');

    expect(m).to.be.an.instanceof(Object);
    expect(m).to.be.an.instanceof(Maybe);
    expect(m.isNothing).to.be.an.instanceof(Function);
    expect(m.map).to.be.an.instanceof(Function);
    expect(m.reduce).to.be.an.instanceof(Function);
    expect(m.join).to.be.an.instanceof(Function);
    expect(m.value).to.equal('foo');
  });

  it('calling maybe.of should instantiate a new object', () => {
    const m = Maybe.of('bar');

    expect(m).to.be.an.instanceof(Object);
    expect(m).to.be.an.instanceof(Maybe);
    expect(m.isNothing).to.be.an.instanceof(Function);
    expect(m.map).to.be.an.instanceof(Function);
    expect(m.reduce).to.be.an.instanceof(Function);
    expect(m.join).to.be.an.instanceof(Function);
    expect(m.value).to.equal('bar');
  });

  it('calling isNothing should return a boolean', () => {
    const m = Maybe.of(null);
    const n = Maybe.of('foo');

    expect(m).to.be.an.instanceof(Object);
    expect(m).to.be.an.instanceof(Maybe);
    expect(m.isNothing()).to.equal(true);
    expect(n.isNothing()).to.equal(false);
  });

  it('calling `map` should return a maybe of the new value', () => {
    const m = Maybe.of(1).map(a => a + 3);

    expect(m).to.be.an.instanceof(Object);
    expect(m).to.be.an.instanceof(Maybe);
    expect(m.isNothing()).to.equal(false);
    expect(m.value).to.equal(4);
  });

  it('calling `Maybe().map(fn).map(fn)` === `Maybe.map(composedFn)`', () => {
    const m = Maybe.of(1).map(a => a + 3).map(a => a + 5);
    const n = Maybe.of(1).map(a => [x => x + 3, x => x + 5].reduce((acc, fn) => fn(acc), a));

    expect(m).to.be.an.instanceof(Maybe);
    expect(n).to.be.an.instanceof(Maybe);
    expect(m.join()).to.equal(n.join());
  });

  it('calling `reduce` should apply the function to the stored value and return the result', () => {
    const m = Maybe.of(1).reduce(a => a + 3);

    expect(m).to.be.a('number');
    expect(m).to.equal(4);
  });

  it('calling `join` should return the stored value', () => {
    const m = Maybe.of(1);
    const n = Maybe.of('foo');

    expect(m.join()).to.equal(1);
    expect(n.join()).to.equal('foo');
  });
});
