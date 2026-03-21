import { isNil } from "./isNil";

/**
 * Returns the first value in an array or null if it does not exist.
 *
 * @func
 * @since v0.0.0
 * @param xs - Array of items
 * @returns the first item in an array
 * @example
 *
 * head([1, 2, 3]) // => 1
 * head([]) // => null
 */

// head :: [a] -> a | null
export const head = <T>(xs: T[]): T | null => (isNil(xs[0]) ? null : xs[0]);
