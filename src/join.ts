/**
 * Joins elements of an array into a string with each member separated by a
 * given string.
 *
 * @func
 * @since v0.0.0
 * @param x - The separator
 * @param ys - The array to transform into a string
 * @returns string of ys separated by xs
 * @example
 *
 * join(", ")([1, 2, 3]) // => "1, 2, 3"
 */

// join :: a -> [b] -> c
export const join =
  <T extends unknown>(x: string) =>
  (ys: Array<T>): string =>
    ys.join(x);
