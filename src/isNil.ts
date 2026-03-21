type Nil = undefined | null;

/**
 * Checks if a value is null or undefined. Performs slightly better than `x == null`
 * because it doesn't perform type coercion.
 *
 * @func
 * @since v0.0.0
 * @param x - The value to check.
 * @returns true if the value is null or undefined, otherwise false.
 * @example
 *
 * isNil(null); //=> true
 * isNil(undefined); //=> true
 * isNil(0); //=> false
 */

// isNil :: a -> Boolean
export const isNil = (x: unknown): x is Nil => x === null || x === undefined;
