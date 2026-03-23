import { isNil } from "./isNil";

/**
 * A function that converts the supplied type to a string.
 *
 *
 * @func
 * @since v0.0.0
 * @param a - unknown
 * @returns string
 * @example
 *
 * toString("hello"); // => "hello"
 * toString(42); // => "42"
 * toString(3.14); // => "3.14"
 * toString(true); // => "true";
 * toString({ key: "value" }) // => '{"key":"value"}'
 * toString([1, 2, 3]); // => "1,2,3"
 * toString([]); // => ""
 * toString(null); // => "null"
 * toString(undefined); // => "undefined"
 * toString(() => "test"); // => '() => "test"'
 */

// toString :: (a) => b
export const toString = (x: unknown): string => {
  if (isNil(x)) {
    return String(x);
  } else {
    const s = x.toString();

    return s !== "[object Object]" ? s : JSON.stringify(x);
  }
};
