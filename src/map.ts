/**
 * Applies a function to every member of an array and returns a new array of
 * the transformed values.
 *
 * @func
 * @since v0.0.0
 * @param f - The function to apply.
 * @param xs - Array of values
 * @returns The result of applying `f` to each `x` of `xs`.
 * @example
 *
 * map(x => x * 2)([1, 2, 3, 4, 5]) // => [2, 4, 6, 8, 10]
 */

// map :: (a -> b) -> [a] -> [b]
export const map =
  <T, U>(f: (arg0: T) => U) =>
  (xs: T[]): U[] =>
    xs.map(f);
