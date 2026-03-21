/**
 * Converts an object to an array of key-value pairs.
 *
 * @func
 * @since v0.0.0
 * @param x - The object to convert.
 * @returns An array of [key, value] pairs.
 * @example
 *
 * toPairs({ a: 1, b: 2 }); //=> [['a', 1], ['b', 2]]
 */

// toPairs :: { a: b } -> [[a, b]]
export const toPairs = <T>(x: Record<PropertyKey, T>): Array<[string, T]> =>
  Object.entries<T>(x);
