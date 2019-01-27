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
  it('Create a new functor b, from a functor a using the results of calling a function on every value in the functor a.', () => {
    expect(Functor.of(8).map(timesTwo).v).to.equal(16);
    expect(Functor.of([2, 3, 4]).map(timesTwo).v).to.deep.equal([4, 6, 8]);
    expect(Functor.of({three: 3, four: 4}).map(timesTwo).v).to.deep.equal({three: 6, four: 8});
  });

  it('Create a new functor a, from a functor b by replacing all of the values in the functor b with a given value of type a.', () => {
    const i = Functor.of(9);
    const a = Functor.of([1, 2, 3]);
    const o = Functor.of({a: 6, b: 'z'});

    expect(i.clone('a').v).to.equal('a');
    expect(i.v).to.equal(9);
    expect(a.clone(4).v).to.deep.equal([4, 4, 4]);
    expect(a.v).to.deep.equal([1, 2, 3]);
    expect(o.clone(7).v).to.deep.equal({a: 7, b: 7});
    expect(o.v).to.deep.equal({a: 6, b: 'z'});
  });

});
