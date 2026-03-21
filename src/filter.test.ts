import { expect, test } from "vitest";
import { filter } from "./filter";

test("filters array to keep only even numbers", () => {
  const isEven = (x: number) => x % 2 === 0;
  expect(filter(isEven)([1, 2, 3, 4, 5])).toEqual([2, 4]);
});

test("filters array to keep only odd numbers", () => {
  const isOdd = (x: number) => x % 2 !== 0;
  expect(filter(isOdd)([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
});

test("filters strings by length", () => {
  const longerThanTwo = (s: string) => s.length > 2;
  expect(filter(longerThanTwo)(["a", "ab", "abc", "abcd"])).toEqual([
    "abc",
    "abcd",
  ]);
});

test("filters array with no matching elements returns empty array", () => {
  const isNegative = (x: number) => x < 0;
  expect(filter(isNegative)([1, 2, 3, 4, 5])).toEqual([]);
});

test("filters array where all elements match returns all elements", () => {
  const isPositive = (x: number) => x > 0;
  expect(filter(isPositive)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("filters empty array returns empty array", () => {
  const isEven = (x: number) => x % 2 === 0;
  expect(filter(isEven)([])).toEqual([]);
});

test("filters objects by property value", () => {
  const items = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: true },
  ];
  const isActive = (item: { id: number; active: boolean }) => item.active;
  expect(filter(isActive)(items)).toEqual([
    { id: 1, active: true },
    { id: 3, active: true },
  ]);
});

test("filters array of booleans", () => {
  const isTrue = (x: boolean) => x === true;
  expect(filter(isTrue)([true, false, true, false, true])).toEqual([
    true,
    true,
    true,
  ]);
});
