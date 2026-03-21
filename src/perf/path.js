const isNil = (x) => x === null || x === undefined;

/**
 * Retrieves the value at a given path in an object. If the path does not exist,
 * returns null.
 *
 * @func
 * @since v0.0.0
 * @param p - The path to the value.
 * @param obj - The object to retrieve the value from.
 * @returns The value at the given path, or null if the path does not exist.
 * @example
 *
 * path(["a", "b"])( { a: { b: 2 } } ); //=> 2
 * path(["a", "c"])( { a: { b: 2 } } ); //=> null
 */

// path :: [String | Number] -> Object -> Maybe a
const path = (p) => (obj) => {
  let current = obj;

  for (let i = 0; i < p.length; i++) {
    if (isNil(current)) return null;

    current = current[p[i]];
  }

  return current;
};

const pati = (p) => (obj) => {
  let current = obj;
  let i = 0;

  while (i < p.length) {
    if (isNil(current)) return null;

    current = current[p[i++]];
  }

  return current;
};

const patj = (p) => (obj) => {
  const r = obj[p[0]];

  return isNil(r) ? null : patj(p.slice(1))(r);
};

const patk = (p) => (obj) => {
  let current = obj;
  let i = 0;
  let j = p.length;

  while (i < j) {
    if (isNil(current)) return null;

    current = current[p[i++]];
  }

  return current;
};

var iterations = 1000000;
console.time("Function #1");
for (var i = 0; i < iterations; i++) {
  path(["a", "b", 3])({ a: { b: [1, 2, 3, 4] } });
}
console.timeEnd("Function #1");

var iterations = 1000000;
console.time("Function #2");
for (var i = 0; i < iterations; i++) {
  pati(["a", "b", 3])({ a: { b: [1, 2, 3, 4] } });
}
console.timeEnd("Function #2");

var iterations = 1000000;
console.time("Function #3");
for (var i = 0; i < iterations; i++) {
  patj(["a", "b", 3])({ a: { b: [1, 2, 3, 4] } });
}
console.timeEnd("Function #3");

var iterations = 1000000;
console.time("Function #4");
for (var i = 0; i < iterations; i++) {
  patk(["a", "b", 3])({ a: { b: [1, 2, 3, 4] } });
}
console.timeEnd("Function #4");
