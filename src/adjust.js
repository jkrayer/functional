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
 * compose<number, number, { value }>(createObj)(double)(5); //=> { value: 10 }
 */

export const adjust = (index) => (f) => (a) =>
  a.toSpliced(index, 1, f(a[index]));

const a = (index) => (f) => (a) => {
  const copy = [...a];
  copy[index] = f(a[index]);
  return copy;
};

const b = (index) => (f) => (a) => {
  const copy = a.slice();
  copy[index] = f(a[index]);
  return copy;
};

var iterations = 1000000;
console.time("Function #1");
for (var i = 0; i < iterations; i++) {
  adjust(5)((x) => x + 1)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
console.timeEnd("Function #1");

var iterations = 1000000;
console.time("Function #2");
for (var i = 0; i < iterations; i++) {
  a(5)((x) => x + 1)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
console.timeEnd("Function #2");

var iterations = 1000000;
console.time("Function #3");
for (var i = 0; i < iterations; i++) {
  b(5)((x) => x + 1)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
console.timeEnd("Function #3");
