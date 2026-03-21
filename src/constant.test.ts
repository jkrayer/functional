import { expect, test } from "vitest";
import { constant } from "./constant";

test("returns a function", () => {
  const fn = constant(5);
  expect(typeof fn).toBe("function");
});

test("returns the given value when called", () => {
  const fn = constant(42);
  expect(fn()).toBe(42);
});

test("returns the same value on multiple calls", () => {
  const fn = constant("hello");
  expect(fn()).toBe("hello");
  expect(fn()).toBe("hello");
});

test("works with null", () => {
  const fn = constant(null);
  expect(fn()).toBe(null);
});

test("works with undefined", () => {
  const fn = constant(undefined);
  expect(fn()).toBe(undefined);
});

test("works with objects", () => {
  const obj = { key: "value" };
  const fn = constant(obj);
  expect(fn()).toBe(obj);
});

test("works with arrays", () => {
  const arr = [1, 2, 3];
  const fn = constant(arr);
  expect(fn()).toBe(arr);
});

test("works with functions", () => {
  const innerFn = () => "inner";
  const fn = constant(innerFn);
  expect(fn()).toBe(innerFn);
});

test("ignores arguments passed to returned function", () => {
  const fn = constant(42);
  expect(fn(1, 2, 3)).toBe(42);
});
