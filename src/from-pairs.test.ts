import { expect, test } from "vitest";
import { fromPairs } from "./from-pairs";

test("converts array of pairs into an object", () => {
  const result = fromPairs([
    ["a", 1],
    ["b", 2],
  ]);
  expect(result).toEqual({ a: 1, b: 2 });
});

test("works with string values", () => {
  const result = fromPairs([
    ["name", "John"],
    ["city", "NYC"],
  ]);
  expect(result).toEqual({ name: "John", city: "NYC" });
});

test("works with mixed value types", () => {
  const result = fromPairs([
    ["id", 1],
    ["active", true],
    ["tag", "user"],
  ]);
  expect(result).toEqual({ id: 1, active: true, tag: "user" });
});

test("works with empty array", () => {
  const result = fromPairs([]);
  expect(result).toEqual({});
});

test("works with single pair", () => {
  const result = fromPairs([["key", "value"]]);
  expect(result).toEqual({ key: "value" });
});

test("works with object values", () => {
  const result = fromPairs([
    ["user", { name: "John" }],
    ["config", { debug: true }],
  ]);
  expect(result).toEqual({
    user: { name: "John" },
    config: { debug: true },
  });
});

test("works with array values", () => {
  const result = fromPairs([
    ["numbers", [1, 2, 3]],
    ["letters", ["a", "b"]],
  ]);
  expect(result).toEqual({
    numbers: [1, 2, 3],
    letters: ["a", "b"],
  });
});

test("handles duplicate keys by using the last value", () => {
  const result = fromPairs([
    ["key", "first"],
    ["key", "second"],
  ]);
  expect(result).toEqual({ key: "second" });
});
