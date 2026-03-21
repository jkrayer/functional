/**
 * Applies a function to the value at a given index and returns a new array with
 * the modified value.
 *
 * @func
 * @since v0.0.0
 * @param i - An array index
 * @param f - The function to apply.
 * @param a - Array of values
 * @returns A copy of "a" with the value at "a[i]" set to the result of "f(a[i])"
 * @example
 *
 * setA(2)(() => 10)([1, 2, 3, 4, 5]) // => [1, 2, 10, 4, 5]
 */

// setA :: (a) -> (b -> c) -> [b] -> [c]
export const setA =
  <T, U>(i: number) =>
  (f: (arg0: T) => U) =>
  (a: T[]): Array<T | U> => {
    const copy = a.slice() as Array<T | U>;
    copy[i] = f(a[i]);
    return copy;
  };

/**
 * Applies the given function to the value at the given key and returns a new
 * object with the modified value.
 *
 * @func
 * @since v0.0.0
 * @param k - an object key
 * @param f - The function to apply.
 * @param o - the object to modify
 * @returns A copy of "o" with the value at "o[k]" set to the results of "f(o[k])"
 * @example
 *
 * setO("c")(() => 10)({ a: 1, b: 2, c: 3, d: 4, e: 5 }) // => { a: 1, b: 2, c: 10, d: 4, e: 5 }
 */

// setA :: (a) -> (b -> c) -> { a: b } -> { a: c }
export const setO =
  <T, U>(k: PropertyKey) =>
  (f: (arg0: T) => U) =>
  (o: Record<PropertyKey, T>): Record<PropertyKey, T | U> => ({
    ...o,
    [k]: f(o[k]),
  });
