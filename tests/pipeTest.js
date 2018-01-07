const { expect } = require('chai');
const pipe = require('../src/pipe');
const { PIPE_ERROR_MESSAGE } = require('../src/errors');

require('chai').use(require('sinon-chai'));

describe('pipe', () => {
  const add1 = n => n + 1;
  const add2 = n => n + 2;
  const add3 = pipe(add1, add2);
  const str = 'a';

  it('should throw if all arguments are not functions', () => {
    expect(() => pipe(add1, str)).to.throw(PIPE_ERROR_MESSAGE);
  });

  it('should return a unary function', () => {
    expect(add3).to.be.an.instanceof(Function);
    expect(add3.length).to.equal(1);
  });

  it('should output the expected value', () => {
    expect(add3(3)).to.equal(6);
  });
});
