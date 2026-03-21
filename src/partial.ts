/**
 * Applies a binary function. Used to create unary functions from
 * binary functions.
 *
 * @func
 * @since v0.0.0
 * @param f - a binary function
 * @param x - the first value
 * @param y - the second value
 * @returns The result of applying `f` to `x, y`.
 * @example
 *
 * const add = (a, b) => a + b;
 * const inc = partial(add)(1);
 * inc(1); // => 2
 */

// partial :: (a -> b -> c) -> a -> b -> c
export const partial =
  <T, U, V>(fn: (arg0: T, arg1: U) => V) =>
  (x: T) =>
  (y: U): V =>
    fn(x, y);
