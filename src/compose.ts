/**
 * Composes two functions, where the output of the second function is passed as
 * input to the first function. The final result is the output of the first
 * function.
 *
 * @func
 * @since v0.0.0
 * @param f - The second function to apply.
 * @param g - The first function to apply.
 * @returns A function that applies `g` to its argument and then applies `f` to the result.
 * @example
 *
 * compose<number, number, number>(add)(double)(5); //=> 11
 * compose<string, string, string>(toUpperCase)(trim)("  hello  "); //=> "HELLO"
 * compose<number, number, { value: number }>(createObj)(double)(5); //=> { value: 10 }
 */

// compose :: (b -> c) -> (a -> b) -> a -> c
export const compose =
  <T, U, V>(f: (x: U) => V) =>
  (g: (x: T) => U) =>
  (x: T): V =>
    f(g(x));
