const { expect } = require('chai');
const sinon = require('sinon');
const { isConstructor, isNothing} = require('../src/helpers');
const Functor = require('../src/functor');

require('chai').use(require('sinon-chai'));

describe('helpers', () => {

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
});
