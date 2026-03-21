import { expect, test } from "vitest";
import { compose } from "./compose";

test("composes two functions with number operations", () => {
  const add = (x: number) => x + 1;
  const double = (x: number) => x * 2;
  expect(compose<number, number, number>(add)(double)(5)).toBe(11);
});

test("composes functions with string transformations", () => {
  const toUpperCase = (s: string) => s.toUpperCase();
  const trim = (s: string) => s.trim();
  expect(compose<string, string, string>(toUpperCase)(trim)("  hello  ")).toBe(
    "HELLO",
  );
});

test("composes function that returns an object", () => {
  const createObj = (x: number) => ({ value: x });
  const double = (x: number) => x * 2;
  expect(
    compose<number, number, { value: number }>(createObj)(double)(5),
  ).toEqual({ value: 10 });
});

test("composes functions with array operations", () => {
  const getLength = (arr: number[]) => arr.length;
  const doubleArray = (x: number) => Array(x).fill(0);
  expect(compose<number, number[], number>(getLength)(doubleArray)(3)).toBe(3);
});

test("composes function that returns another function", () => {
  const multiplyBy = (x: number) => (y: number) => y * x;
  const add = (x: number) => x + 5;
  const result = compose<number, number, (y: number) => number>(multiplyBy)(
    add,
  )(3);
  expect(result(2)).toBe(16);
});

test("composes boolean predicate with transformation", () => {
  const isEven = (x: number) => x % 2 === 0;
  const double = (x: number) => x * 2;
  expect(compose<number, number, boolean>(isEven)(double)(3)).toBe(true);
});

test("composes multiple nested transformations", () => {
  const increment = (x: number) => x + 1;
  const square = (x: number) => x * x;
  expect(compose<number, number, number>(square)(increment)(4)).toBe(25);
});
