const sinon = require('sinon');
const { expect } = require('chai');
const Functor = require('../src/functor');
const {
  isConstructor,
  isNothing,
  path
} = require('../src/helpers');

require('chai').use(require('sinon-chai'));

describe('helpers', () => {
  describe('path', () => {
    it('should return deep falsey values', () => {
      expect(path(['a', 'b'], { a: { b: false } })).to.equal(false);
      expect(path(['a', 'b'], { a: { b: null } })).to.equal(null);
      expect(path(['a', 'b'], { a: { b: '' } })).to.equal('');
      expect(path(['a', 'b'], { a: { b: 0 } })).to.equal(0);
    });

    it('should return undefined if any key in the path is undefined', () => {
      expect(path(['a', 'b'], { a: { c: [{d: 1}] } })).to.equal(undefined);
      expect(path(['a', 'c', 1], { a: { c: [{d: 1}] } })).to.equal(undefined);
    });

    it('should not find properties that are not own properties', () => {
      expect(path(['a', 'c', 'concat'], { a: { c: [] } })).to.equal(undefined);
      expect(path(['a', 'c', 'hasOwnProperty'], { a: { c: {} } })).to.equal(undefined);
    });
  });

  describe('isConstructor', () => {
    const  a = Functor(1);

    it('should return true if the constructor is in the object\'s prototype chain', () => {
      expect(isConstructor(a, Functor)).to.equal(true);
      expect(isConstructor(a, Object)).to.equal(true);
      expect(isConstructor([], Array)).to.equal(true);
    });

    it('should return false if the constructor is not in the object\'s prototype chain', () => {
      expect(isConstructor(a, Array)).to.equal(false);
    });
  });

  describe('isNothing', () => {
    it('should return true if the value is null or undefined', () => {
      expect(isNothing(null)).to.equal(true);
      expect(isNothing(void 0)).to.equal(true);
    });

    it('should return false for any other value', () => {
      expect(isNothing('')).to.equal(false);
      expect(isNothing(0)).to.equal(false);
      expect(isNothing(NaN)).to.equal(false);
    })
  });
});
