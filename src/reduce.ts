/**
 * Reduces an array to a single value by applying a reducer function to each element.
 *
 * @func
 * @since v0.0.0
 * @typeParam T - The type of elements in the array.
 * @typeParam U - The type of the accumulator and return value.
 * @param f - The reducer function that takes an accumulator, current element, and index, and returns the new accumulator.
 * @returns A function that takes an initial accumulator value.
 * @returns A function that takes an array and returns the reduced value.
 * @example
 *
 * reduce((acc, x) => acc + x)(0)([1, 2, 3, 4, 5]) // => 15
 */

// reduce :: (a -> b -> c) -> d -> ([b]) -> d
export const reduce =
  <T, U>(f: (arg0: U, arg1: T, arg2: number) => U) =>
  (x: U) =>
  (ys: T[]): U =>
    ys.reduce(f, x);
