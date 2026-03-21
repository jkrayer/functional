/**
 * Converts an array of key-value pairs into an object.
 *
 * @func
 * @since v0.0.0
 * @param xs - An array of tuples containing string keys and values of type T.
 * @returns An object with string keys and values of type T.
 * @example
 *
 * fromPairs([['a', 1], ['b', 2]]); //=> { a: 1, b: 2 }
 */

// fromPairs :: [[a, b]] -> { a: b }
export const fromPairs = <T>(xs: Array<[string, T]>): Record<string, T> =>
  Object.fromEntries<T>(xs);
