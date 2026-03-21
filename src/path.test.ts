import { expect, test } from "vitest";
import { path } from "./path";

test("retrieves a nested property from an object", () => {
  const obj = { user: { name: "John" } };
  expect(path<string>(["user", "name"])(obj)).toBe("John");
});

test("retrieves a property by numeric index from an array", () => {
  const obj = { items: [10, 20, 30] };
  expect(path<number>(["items", 1])(obj)).toBe(20);
});

test("returns null when path includes null in the chain", () => {
  const obj = { user: null };
  expect(path<string>(["user", "name"])(obj)).toBeNull();
});

test("returns null when path includes undefined in the chain", () => {
  const obj = { user: undefined };
  expect(path<string>(["user", "name"])(obj)).toBeNull();
});

test("retrieves a deeply nested property", () => {
  const obj = { a: { b: { c: { d: "deep" } } } };
  expect(path<string>(["a", "b", "c", "d"])(obj)).toBe("deep");
});

test("returns null when property does not exist", () => {
  const obj = { user: { name: "John" } };
  expect(path<string>(["user", "age"])(obj)).toBeUndefined();
});

test("retrieves a property from an array of objects", () => {
  const obj = { users: [{ name: "Alice" }, { name: "Bob" }] };
  expect(path<string>(["users", 0, "name"])(obj)).toBe("Alice");
});

test("returns null when passed null as the object", () => {
  expect(path<string>(["user", "name"])(null)).toBeNull();
});

test("returns null when passed undefined as the object", () => {
  expect(path<string>(["user", "name"])(undefined)).toBeNull();
});

test("retrieves a property with an empty path", () => {
  const obj = { name: "test" };
  expect(path<typeof obj>([])(obj)).toBe(obj);
});
