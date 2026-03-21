/**
 * Applies a predicate to every member of an array and returns a new array of
 * values that pass the predicate function.
 *
 * @func
 * @since v0.0.0
 * @param f - The function to apply.
 * @param xs - Array of values
 * @returns The result of applying `f` to each `x` of `xs`.
 * @example
 *
 * filter(x => x % 2 === 0)([1, 2, 3, 4, 5]) // => [2, 4]
 */

// filter :: (a -> Boolean) -> [a] -> [a]
export const filter =
  <T>(f: (arg0: T) => boolean) =>
  (xs: T[]): T[] =>
    xs.filter(f);
