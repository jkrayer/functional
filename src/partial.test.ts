import { expect, test } from "vitest";
import { partial } from "./partial";

test("applies binary function from left to right", () => {
  const subtract = (a: number, b: number) => a - b;
  const subtractFrom10 = partial(subtract)(10);
  expect(subtractFrom10(3)).toBe(7);
});

test("works with string concatenation", () => {
  const concat = (a: string, b: string) => a + b;
  const prependHello = partial(concat)("hello");
  expect(prependHello(" world")).toBe("hello world");
});

test("works with division", () => {
  const divide = (a: number, b: number) => a / b;
  const divideByNumber = partial(divide)(10);
  expect(divideByNumber(2)).toBe(5);
});

test("works with custom objects", () => {
  const merge = (a: object, b: object) => ({ ...a, ...b });
  const addBase = partial(merge)({ base: true });
  expect(addBase({ key: "value" })).toEqual({
    base: true,
    key: "value",
  });
});

test("works with boolean operations", () => {
  const and = (a: boolean, b: boolean) => a && b;
  const andTrue = partial(and)(true);
  expect(andTrue(true)).toBe(true);
  expect(andTrue(false)).toBe(false);
});

test("preserves function parameter order correctly", () => {
  const power = (base: number, exponent: number) => Math.pow(base, exponent);
  const powerOf2 = partial(power)(2);
  expect(powerOf2(3)).toBe(8);
});

test("works with arrays", () => {
  const at = (arr: number[], index: number) => arr[index];
  const getFromArray = partial(at)([10, 20, 30]);
  expect(getFromArray(1)).toBe(20);
});
