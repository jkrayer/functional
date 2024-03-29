const { isConstructor } = require("./helpers");

/**
 * Store any value that MAY BE `undefined` or `null` and use the attached methods
 * to safely apply functions to the value. Use `Maybe` anywhere a null check
 * would make sense.
 *
 * @example Replace this:
 * let val = 'value that may be null or undefined';
 * if (val) { val = changeVal(val); }
 * With this:
 * let val = Maybe.of('value that may be null or undefined').flatMap(changeVal);
 *
 * 1. Prevent the stored value from being re-assigned like Maybe.v = newVal.
 *    Remeber some JS types can still be mutated via methods like Array.push.
 */
function Maybe(val) {
  // Address need for instantiation with "new"
  if (!isConstructor(this, Maybe)) return Maybe.of(val);

  Object.defineProperty(this, "v", { value: val, writable: false }); // 1.
}

/**
 * Returns a new Maybe of the supplied `value` argument
 *
 * @param  {Any} value type to store in `Maybe`
 * @return {Object}    New Maybe
 */
Maybe.of = function of(val) {
  return new Maybe(val);
};

/**
 * Determines if the stored value is `null` or `undefined`
 *
 * @return {Boolean}
 */
Maybe.prototype.isNothing = function isNothing() {
  return this.v === null || typeof this.v === "undefined";
};

/**
 * Apply the supplied function to the stored value and return a Maybe of the result
 *
 * @param  {Function} fn function to apply against the stored value
 * @return {Object}      Maybe
 */
Maybe.prototype.map = function map(fn) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.v));
};

/**
 * Apply the supplied function to the stored value and return the result
 *
 * @param  {Function} fn function to apply against the stored value
 * @return {Any}
 */
Maybe.prototype.fmap = function fmap(fn) {
  return this.isNothing() ? null : fn(this.v);
};

module.exports = Maybe;

// isNil:: Any -> Boolean
const isNil = (x) => x == null || x == undefined;

const Just = (a) => {
  return {
    map: (f) => Maybe(f(a)),
    chain: (f) => f(a),
    extract: () => a,
    bind: (f) => Maybe(f(a).extract()),
    toString: () => `Just(${a})`,
  };
};
Just.of = (a) => Just(a);

const Nothing = (a) => {
  return {
    map: () => Nothing(a),
    chain: (f) => f(a),
    extract: () => a,
    bind: (f) => Maybe(f(a).extract()),
    toString: () => `Nothing(${a})`,
  };
};
Nothing.of = (x) => Nothing(null);

const Maybe = (a) => {
  return {
    map: (f) => Maybe(f(a)),
    chain: (f) => f(a),
    extract: () => a,
    bind: (f) => Maybe(f(a).extract()),
    toString: () => `Maybe(${a})`,
  };
};

Maybe.of = (a) => Maybe(a);
Maybe.fromNullable = (a) => (isNil(a) ? Nothing.of(a) : Just.of(a));
Maybe.Nothing = Nothing.of;
Maybe.Just = (a) => Just.of(a);

function Maybe(val) {
  return {
    map: (f) => Maybe(f(val)),
    chain: (f) => this.map(f).join(),
    join: () => val,
    orElse: (d) => (isNil(val) ? Maybe(d) : this),
    ap: (maybe) => maybe.map(val),
  };
}
Maybe.of = (val) => Maybe(val);
