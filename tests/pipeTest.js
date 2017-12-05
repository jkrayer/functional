const { expect } = require('chai');
const pipe = require('../src/pipe');

require('chai').use(require('sinon-chai'));

describe('pipe', () => {
  it('should throw if all arguments are not functions', () => {
    expect(() => pipe(a => a, 'string', b => b)).to.throw('All arguments provided to pipe must be functions');
  });

  it('should return a unary function', () => {
    const fn = pipe(a => a, b => b);

    expect(fn).to.be.an.instanceof(Function);
    expect(fn.length).to.equal(1);
  });

  it('should return the result of running all piped methods on a value', () => {
    const addTen = a => a + 10;
    const addFive = a => a + 5;
    const addFifteen = pipe(addTen, addFive);

    expect(addFifteen(15)).to.equal(30);
    expect(addFifteen(45)).to.equal(60);
  });
});
