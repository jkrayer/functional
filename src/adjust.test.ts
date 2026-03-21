import { expect, test } from "vitest";
import { adjust } from "./adjust";

test("applies function to element at given index", () => {
  const result = adjust<number>(2)((x) => x + 1)([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 4, 4, 5]);
});

test("returns new array without mutating original", () => {
  const original = [1, 2, 3, 4, 5];
  const result = adjust<number>(1)((x) => x * 2)(original);
  expect(result).toEqual([1, 4, 3, 4, 5]);
  expect(original).toEqual([1, 2, 3, 4, 5]);
  expect(result).not.toEqual(original);
});

test("works with index 0", () => {
  const result = adjust<number>(0)((x) => x - 1)([10, 20, 30]);
  expect(result).toEqual([9, 20, 30]);
});

test("works with last index", () => {
  const result = adjust<number>(4)((x) => x * 10)([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 3, 4, 50]);
});

test("works with string arrays", () => {
  const result = adjust<string>(1)((x) => x.toUpperCase())(["a", "b", "c"]);
  expect(result).toEqual(["a", "B", "c"]);
});

test.skip("works with negative index", () => {
  const result = adjust<number>(-1)((x) => x + 100)([1, 2, 3]);
  expect(result).toEqual([1, 2, 103]);
});

test("works with out of bounds index", () => {
  const result = adjust<number>(10)((x) => x + 1)([1, 2, 3]);
  expect(result).toEqual([1, 2, 3, NaN]);
});
