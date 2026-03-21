import { expect, test } from "vitest";
import { map } from "./map";

test("applies function to each element in array", () => {
  const double = (x: number) => x * 2;
  expect(map(double)([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
});

test("works with string transformation", () => {
  const toUpperCase = (s: string) => s.toUpperCase();
  expect(map(toUpperCase)(["hello", "world"])).toEqual(["HELLO", "WORLD"]);
});

test("works with empty array", () => {
  const double = (x: number) => x * 2;
  expect(map(double)([])).toEqual([]);
});

test("works with type transformation", () => {
  const toString = (n: number) => `number: ${n}`;
  expect(map(toString)([1, 2, 3])).toEqual([
    "number: 1",
    "number: 2",
    "number: 3",
  ]);
});

test("preserves array length", () => {
  const identity = (x: number) => x;
  const input = [1, 2, 3, 4, 5];
  expect(map(identity)(input).length).toBe(input.length);
});

test("works with object transformation", () => {
  const toObject = (n: number) => ({ value: n });
  expect(map(toObject)([1, 2])).toEqual([{ value: 1 }, { value: 2 }]);
});

test("curries correctly", () => {
  const double = (x: number) => x * 2;
  const mapDouble = map(double);
  expect(mapDouble([1, 2, 3])).toEqual([2, 4, 6]);
});

test("works with boolean conversion", () => {
  const isEven = (n: number) => n % 2 === 0;
  expect(map(isEven)([1, 2, 3, 4])).toEqual([false, true, false, true]);
});
