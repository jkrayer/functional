/**
 * Returns a function that always returns the first given value. This is useful when
 * you want to create a function that ignores its arguments and always returns
 * the same result.
 *
 * @func
 * @since v0.0.0
 * @param x - The value to return.
 * @param _ - A function argument that is ignored.
 * @returns x
 * @example
 *
 * constant(42)(); //=> 42
 */

// constant :: a -> () -> a
export const constant =
  <T>(x: T) =>
  (): T =>
    x;
