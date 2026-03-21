import { isNil } from "./isNil";

/**
 * Retrieves the value at a given path in an object. If the path does not exist,
 * returns null.
 *
 * @func
 * @since v0.0.0
 * @param p - The path to the value.
 * @param obj - The object to retrieve the value from.
 * @returns The value at the given path, or null if the path does not exist.
 * @example
 *
 * path(["a", "b"])( { a: { b: 2 } } ); //=> 2
 * path(["a", "c"])( { a: { b: 2 } } ); //=> null
 */

// path :: [String | Number] -> Object -> Maybe a
export const path =
  <T>(p: Array<string | number>) =>
  (obj: unknown): T | null => {
    let current = obj;
    let i = 0;

    while (i < p.length) {
      if (isNil(current)) return null;

      current = current[p[i++] as keyof typeof current];
    }

    return current as T | null;
  };
