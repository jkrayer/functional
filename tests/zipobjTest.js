const { expect } = require('chai');
const zipObj = require('../src/zipobj');

describe('zipObj', () => {
  it('should return an object with all the keys an vals', () => {
    expect(zipObj(['a', 'b'], [1, 2])).to.deep.equal({a:1, b:2})
  });

  it('should return an object limited by the smaller array', () => {
    expect(zipObj(['a', 'b', 'c'], [1, 2])).to.deep.equal({a:1, b:2})
    expect(zipObj(['a', 'b'], [1, 2, 3])).to.deep.equal({a:1, b:2})
  });

  it('should have an empty string as a key when the supplied key is not a string', () => {
    expect(zipObj(['a', []], [1, 2])).to.deep.equal({a:1, '':2})
  });
});
