import { expect, test } from "vitest";
import { head } from "./head";

test("returns first element of array", () => {
  expect(head([1, 2, 3])).toBe(1);
});

test("returns null for empty array", () => {
  expect(head([])).toBe(null);
});

test("returns first element for single element array", () => {
  expect(head([42])).toBe(42);
});

test("returns first element for array of strings", () => {
  expect(head(["a", "b", "c"])).toBe("a");
});

test("returns first element for array of objects", () => {
  const obj = { key: "value" };
  expect(head([obj, { key: "other" }])).toBe(obj);
});

test("returns null for array with undefined", () => {
  expect(head([undefined, 1, 2])).toBe(null);
});

test("returns null for array with null", () => {
  expect(head([null, 1, 2])).toBe(null);
});

test("returns first element for array with falsy values", () => {
  expect(head([0, 1, 2])).toBe(0);
});

test("returns first element for array with false", () => {
  expect(head([false, true])).toBe(false);
});

test("returns first element for array with empty string", () => {
  expect(head(["", "hello"])).toBe("");
});
