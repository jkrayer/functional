/**
 * Returns the value that was passed in. Useful as a default function or when
 * you want to explicitly indicate that a value should be returned without
 * modification.
 *
 * @func
 * @since v0.0.0
 * @param x - The value to return.
 * @returns x
 * @example
 *
 * identity(5); //=> 5
 * identity("hello"); //=> "hello"
 */

// identity :: a -> a
export const identity = <T>(x: T): T => x;
