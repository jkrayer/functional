/**
 * Applies a binary function from right to left. Used to create unary functions
 * from binary functions.
 *
 * @func
 * @since v0.0.0
 * @param f - a binary function
 * @param x - the second value
 * @param y - the first value
 * @returns The result of applying `f` to `y, x`.
 * @example
 *
 * const toInt = partial(parseInt)(10);
 * toInt("1"); // => 1
 */

// partial :: (a -> b -> c) -> b -> a -> c
export const partialRight =
  <T, U, V>(fn: (arg0: T, arg1: U) => V) =>
  (x: U) =>
  (y: T): V =>
    fn(y, x);
