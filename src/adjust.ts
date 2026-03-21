/**
 * Applies a function to the value at the given index of an array and returns a
 * new array with the modified value.
 *
 * @func
 * @since v0.0.0
 * @param f - The function to apply to the value at the given index.
 * @returns A function that applies `f` to the value at the given index and returns a new array.
 * @example
 *
 * adjust<number>(5)((x) => x + 1)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //=> [1, 2, 3, 4, 5, 7, 7, 8, 9, 10]
 */

export const adjust =
  <T>(i: number) =>
  (f: (x: T) => T) =>
  (a: T[]): T[] => {
    const copy = a.slice();
    copy[i] = f(a[i]);
    return copy;
  };

export const adjustO =
  <O extends Record<PropertyKey, unknown>, K extends keyof O>(i: K) =>
  <V>(f: (arg0: O[K]) => V) =>
  (o: O): Omit<O, K> & Record<K, V> => ({
    ...o,
    [i]: f(o[i]),
  });

//
const changes = [
  [["goal"], add(1)],
  [["budget"], () => {}],
  [["goalCpm"], () => {}],
  [["bidDollars"], () => {}],
  [["bidCpm"], () => {}],
  [["marketData", "new york", "goal"], () => {}],
  [["marketData", "new york", "coltotals"], () => {}],
  [["marketData", "new york", 15, "bidDollars"], () => {}],
  [["marketData", "new york", 15, "budget"], mult(goal)],
  [["marketData", "new york", 15, "goal"], constant(diff)],
  [["marketData", "new york", 15, "cols", 6], constant(val)],
];

//
const copy = {
  // ...original
};

changes.forEach(([path, fn/val]) => {

});
