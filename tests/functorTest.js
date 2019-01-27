const { expect } = require('chai');
const Functor = require('../src/functor');
const identity = require('../src/identity');

require('chai').use(require('sinon-chai'));

describe('Functor', () => {
  const timesTwo = x => x * 2;
  const plusThree = x => x + 3;

  // 3.1 Functor Laws https://wiki.haskell.org/Functor
  it('Functors must preserve identity morphisms', () => {
    const f = Functor.of(1);
    const g = Functor.of('A');
    const h = Functor.of([1, 'A', 4]);

    expect(f.map(identity).v).to.equal(1);
    expect(g.map(identity).v).to.equal('A');
    expect(h.map(identity).v).to.deep.equal([1, 'A', 4]);
  });

  it('Functors preserve composition of morphisms', () => {
    const f = Functor.of(5);
    const composed = x => timesTwo(plusThree(x));

    expect(f.map(plusThree).map(timesTwo).v).to.equal(16);
    expect(f.map(composed).v).to.equal(16);
  });

  // 4. Methods
  it('Creates a new functor b, from a functor a using the results of calling a function on every value in the functor a.', () => {
    const fun = Functor.of(8);

    expect(fun.map(timesTwo).v).to.equal(16);
    expect(fun.v).to.equal(8);
  });

  it('Should show the container and value as a string', () => {
    const fun = Functor.of(8);

    expect(fun.toString()).to.equal('Functor.of(8)');
  });
});
