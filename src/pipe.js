/**
 * Save an array of functions that can be run left to right against
 * a provided value
 * @return {Function} unary function
 */
function pipe(...fns) {
  const allFns = fns.reduce((acc, fn) => acc && typeof fn === 'function', true);

  if (!allFns) {
    throw new TypeError('All arguments provided to pipe must be functions');
  }

  return a => fns.reduce((acc, fn) => fn(acc), a);
}

module.exports = pipe;
