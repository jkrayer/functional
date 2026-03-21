import { expect, test } from "vitest";
import { toPairs } from "./to-pairs";

test("converts object to array of key-value pairs", () => {
  const result = toPairs({ a: 1, b: 2 });
  expect(result).toEqual([
    ["a", 1],
    ["b", 2],
  ]);
});

test("works with string values", () => {
  const result = toPairs({ name: "John", city: "NYC" });
  expect(result).toEqual([
    ["name", "John"],
    ["city", "NYC"],
  ]);
});

test("works with empty object", () => {
  const result = toPairs({});
  expect(result).toEqual([]);
});

test("works with single property", () => {
  const result = toPairs({ key: "value" });
  expect(result).toEqual([["key", "value"]]);
});

test("works with numeric keys", () => {
  const result = toPairs({ 1: "one", 2: "two" });
  expect(result).toEqual([
    ["1", "one"],
    ["2", "two"],
  ]);
});

test("works with mixed value types", () => {
  const result = toPairs({ a: 1, b: "text", c: true });
  expect(result).toEqual([
    ["a", 1],
    ["b", "text"],
    ["c", true],
  ]);
});

test("works with array values", () => {
  const result = toPairs({ arr1: [1, 2], arr2: [3, 4] });
  expect(result).toEqual([
    ["arr1", [1, 2]],
    ["arr2", [3, 4]],
  ]);
});

test("works with object values", () => {
  const result = toPairs({ obj1: { x: 1 }, obj2: { y: 2 } });
  expect(result).toEqual([
    ["obj1", { x: 1 }],
    ["obj2", { y: 2 }],
  ]);
});
