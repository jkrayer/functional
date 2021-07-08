const identity = require('./');

test('identity', () => {
  expect(identity(true)).toBe(true);
  expect(identity(false)).toBe(false);
  expect(identity(1)).toBe(1);
  expect(identity('str')).toBe('str');
  expect(identity(null)).toBe(null);
});
