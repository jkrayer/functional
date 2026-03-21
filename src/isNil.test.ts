import { expect, test } from "vitest";
import { isNil } from "./isNil";

test("returns true for null", () => {
  expect(isNil(null)).toBe(true);
});

test("returns true for undefined", () => {
  expect(isNil(undefined)).toBe(true);
});

test("returns false for empty string", () => {
  expect(isNil("")).toBe(false);
});

test("returns false for zero", () => {
  expect(isNil(0)).toBe(false);
});

test("returns false for false", () => {
  expect(isNil(false)).toBe(false);
});

test("returns false for empty object", () => {
  expect(isNil({})).toBe(false);
});

test("returns false for empty array", () => {
  expect(isNil([])).toBe(false);
});

test("returns false for string", () => {
  expect(isNil("hello")).toBe(false);
});

test("returns false for number", () => {
  expect(isNil(42)).toBe(false);
});

test("returns false for object", () => {
  expect(isNil({ key: "value" })).toBe(false);
});
