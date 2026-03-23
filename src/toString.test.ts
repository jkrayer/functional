import { expect, test } from "vitest";
import { toString } from "./toString";

test("converts string to string", () => {
  expect(toString("hello")).toBe("hello");
});

test("converts number to string", () => {
  expect(toString(42)).toBe("42");
});

test("converts boolean true to string", () => {
  expect(toString(true)).toBe("true");
});

test("converts boolean false to string", () => {
  expect(toString(false)).toBe("false");
});

test("converts object to string", () => {
  const obj = { key: "value" };
  expect(toString(obj)).toBe('{"key":"value"}');
});

test("converts array to string", () => {
  expect(toString([1, 2, 3])).toBe("1,2,3");
});

test("converts null to string", () => {
  expect(toString(null)).toBe("null");
});

test("converts undefined to string", () => {
  expect(toString(undefined)).toBe("undefined");
});

test("converts negative number to string", () => {
  expect(toString(-123)).toBe("-123");
});

test("converts decimal number to string", () => {
  expect(toString(3.14)).toBe("3.14");
});

test("converts empty array to string", () => {
  expect(toString([])).toBe("");
});

test("converts function to string", () => {
  const fn = () => "test";
  expect(toString(fn)).toContain("test");
});
