import { expect, test } from "vitest";
import { setA, setO } from "./set.ts";

test("setA modifies value at given index", () => {
  const result = setA(2)(() => 10)([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 10, 4, 5]);
});

test("setA does not mutate original array", () => {
  const original = [1, 2, 3, 4, 5];
  setA(2)(() => 10)(original);
  expect(original).toEqual([1, 2, 3, 4, 5]);
});

test("setA works with string transformation", () => {
  const result = setA(1)((x) => x.toUpperCase())(["a", "b", "c"]);
  expect(result).toEqual(["a", "B", "c"]);
});

test("setA works with numeric transformation", () => {
  const result = setA(0)((x) => x * 2)([5, 10, 15]);
  expect(result).toEqual([10, 10, 15]);
});

test("setA works at first index", () => {
  const result = setA(0)(() => 99)([1, 2, 3]);
  expect(result).toEqual([99, 2, 3]);
});

test("setA works at last index", () => {
  const result = setA(4)(() => 99)([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 3, 4, 99]);
});

test("setO modifies value at given key", () => {
  const result = setO("c")(() => 10)({ a: 1, b: 2, c: 3, d: 4, e: 5 });
  expect(result).toEqual({ a: 1, b: 2, c: 10, d: 4, e: 5 });
});

test("setO does not mutate original object", () => {
  const original = { a: 1, b: 2, c: 3 };
  setO("b")(() => 99)(original);
  expect(original).toEqual({ a: 1, b: 2, c: 3 });
});

test("setO works with string transformation", () => {
  const result = setO("name")((x) => x.toUpperCase())({
    name: "john",
    age: 30,
  });
  expect(result).toEqual({ name: "JOHN", age: 30 });
});

test("setO works with numeric transformation", () => {
  const result = setO("count")((x) => x + 1)({ count: 5, id: 1 });
  expect(result).toEqual({ count: 6, id: 1 });
});

test("setO preserves other properties", () => {
  const result = setO("x")((n) => n * 2)({
    x: 5,
    y: 10,
    z: 15,
  });
  expect(result).toEqual({ x: 10, y: 10, z: 15 });
});
