const { expect } = require('chai');
const Applicative = require('../src/applicative');
const identity = require('../src/identity');
const pipe = require('../src/pipe');

require('chai').use(require('sinon-chai'));

describe('Applicative', () => {
  const timesTwo = (x) => x * 2;
  const plusThree = (x) => x + 3;

  it('Identity', () => {
    // Identity in an applicative is the same as identity
    const identityApp = Applicative.of(identity);

    expect(identityApp.app(Applicative.of(5)).v).to.equal(identity(5));
  });

  it('Homomorphism', () => {
    // The result of applying the lifted function to the lifted value is the
    // same as lifting the result of applying the function to the value
    const appTimesTwo = Applicative.of(timesTwo);
    const appTwo = Applicative.of(2);
    const liftedResult = Applicative.of(timesTwo(2));

    expect(appTimesTwo.app(appTwo)).to.deep.equal(liftedResult);
  });

  it('Interchange', () => {
    // How I'm reading this from Typeclassopedia is
    // Functor.of(function).app(Functor.of(value)) ===
    // Functor.of(value).app(Functor.of(function))
    // This seems legit but hw to handle two functors with no function...
    const appTwentyFive = Applicative.of(25);
    const appTwelve = Applicative.of(12);
    const appPlusThree = Applicative.of(plusThree);

    expect(() => appTwentyFive.app(appPlusThree)).to.not.throw();
    expect(() => appPlusThree.app(appTwentyFive)).to.not.throw();
    expect(() => appTwelve.app(appTwentyFive)).to.throw();
  });

  it('Composition', () => {
    const multiplyAdd = pipe(timesTwo, plusThree);
    const appSeven = Applicative.of(7);
    const appMultiplyAdd = Applicative.of(multiplyAdd);
    const appTimesTwo = Applicative.of(timesTwo);
    const appPlusThree = Applicative.of(plusThree);

    expect(appPlusThree.app(appTimesTwo.app(appSeven))).to.deep.equal(appMultiplyAdd.app(appSeven));
  });
});
