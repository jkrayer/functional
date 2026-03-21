import { expect, test } from "vitest";
import { partialRight } from "./partial-right";

test("applies binary function from right to left", () => {
  const subtract = (a: number, b: number) => a - b;
  const subtractFrom10 = partialRight(subtract)(10);
  expect(subtractFrom10(3)).toBe(-7);
});

test("works with string concatenation", () => {
  const concat = (a: string, b: string) => a + b;
  const appendWorld = partialRight(concat)(" world");
  expect(appendWorld("hello")).toBe("hello world");
});

test("works with division", () => {
  const divide = (a: number, b: number) => a / b;
  const divideBy2 = partialRight(divide)(2);
  expect(divideBy2(10)).toBe(5);
});

test("works with custom objects", () => {
  const merge = (a: object, b: object) => ({ ...a, ...b });
  const addDefaults = partialRight(merge)({ default: true });
  expect(addDefaults({ key: "value" })).toEqual({
    key: "value",
    default: true,
  });
});

test("works with boolean operations", () => {
  const and = (a: boolean, b: boolean) => a && b;
  const andTrue = partialRight(and)(true);
  expect(andTrue(true)).toBe(true);
  expect(andTrue(false)).toBe(false);
});

test("preserves function parameter order correctly", () => {
  const power = (base: number, exponent: number) => Math.pow(base, exponent);
  const squared = partialRight(power)(2);
  expect(squared(3)).toBe(9);
});

test("works with arrays", () => {
  const at = (arr: number[], index: number) => arr[index];
  const getSecond = partialRight(at)(1);
  expect(getSecond([10, 20, 30])).toBe(20);
});
