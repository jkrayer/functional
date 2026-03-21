/**
 * Splits a string into and array of strings by the provided character.
 *
 * @func
 * @since v0.0.0
 * @param x - The divider
 * @param y - The string to be split
 * @returns string[]
 * @example
 *
 * split(/,\s?/)("1, 2,3") // => ["1", 2", "3"]
 */

// split :: a -> b -> [c]
export const split =
  (x: string | RegExp) =>
  (y: string): Array<string> =>
    y.split(x);
