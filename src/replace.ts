/**
 * Applies a search string or regular expressions (a) to a string (c) and
 * replaces each match with a given string (b) then returns the result.
 *
 * @func
 * @since v0.0.0
 * @param a - search string or regex
 * @param b - the replacement string
 * @param c - the string to operate one
 * @returns
 * @example
 *
 * const fixSpaces = replace(/\s+/g)(" ");
 * fixSpaces("This  is a  string   with bad  spaces.");
 * // => "This is a string with bad spaces."
 *
 * // Practical
 * const replaceSpaces = replace(/\s+/g);
 * const replaceWithCommas = replaceSpaces(", ");
 * const replaceWithSemis = replaceSpaces("; ");
 * replaceWithCommas("This  is a  string   with bad  spaces.");
 * // => "This, is, a, string, with, bad, spaces."
 *
 * replaceWithSemis("This  is a  string   with bad  spaces.");
 * // => "This; is; a; string; with; bad; spaces."
 */

// replace :: (a) -> (b) -> (c) -> d
export const replace =
  (a: string | RegExp) =>
  (b: string) =>
  (c: string): string =>
    c.replace(a, b);
