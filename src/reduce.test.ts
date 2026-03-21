import { expect, test } from "vitest";
import { reduce } from "./reduce";

test("sums array of numbers", () => {
  const sum = reduce((acc: number, x: number) => acc + x)(0)([1, 2, 3, 4, 5]);
  expect(sum).toBe(15);
});

test("concatenates array of strings", () => {
  const concat = reduce((acc: string, x: string) => acc + x)("")([
    "a",
    "b",
    "c",
  ]);
  expect(concat).toBe("abc");
});

test("multiplies array of numbers", () => {
  const product = reduce((acc: number, x: number) => acc * x)(1)([2, 3, 4]);
  expect(product).toBe(24);
});

test("builds array from elements", () => {
  const collect = reduce((acc: number[], x: number) => [...acc, x])([])([
    1, 2, 3,
  ]);
  expect(collect).toEqual([1, 2, 3]);
});

test("counts elements matching condition", () => {
  const count = reduce((acc: number, x: number) => (x > 2 ? acc + 1 : acc))(0)([
    1, 2, 3, 4, 5,
  ]);
  expect(count).toBe(3);
});

test("does not mutate accumulator object", () => {
  const initial = { sum: 0 };
  const result = reduce((acc: { sum: number }, x: number) => ({
    ...acc,
    sum: acc.sum + x,
  }))(initial)([1, 2, 3]);
  expect(initial).toEqual({ sum: 0 });
  expect(result).toEqual({ sum: 6 });
});

test("provides correct index to reducer function", () => {
  const indices: number[] = [];
  reduce((acc: number, x: number, idx: number) => {
    indices.push(idx);
    return acc + x;
  })(0)([10, 20, 30]);
  expect(indices).toEqual([0, 1, 2]);
});

test("works with empty array", () => {
  const result = reduce((acc: number, x: number) => acc + x)(42)([]);
  expect(result).toBe(42);
});

test("merges objects without mutation", () => {
  const initial = { a: 1 };
  const result = reduce((acc: object, x: object) => ({ ...acc, ...x }))(
    initial,
  )([{ b: 2 }, { c: 3 }]);
  expect(initial).toEqual({ a: 1 });
  expect(result).toEqual({ a: 1, b: 2, c: 3 });
});

test("reduces objects without mutation", () => {
  const x = reduce<number, number[]>((acc, v) => {
    if (v % 2 === 0) return [...acc, v * 2];
    return acc;
  })([]);

  expect(x([1, 2, 3, 4])).toMatchObject([4, 8]);
  expect(x([5, 6, 7, 8])).toMatchObject([12, 16]);

  const y = reduce<number, Record<number, number>>((acc, v) => {
    if (v % 2 === 0) {
      const w = v * 2;
      return { ...acc, [w]: w };
    }
    return acc;
  })({});

  expect(y([1, 2, 3, 4])).toMatchObject({ 4: 4, 8: 8 });
  expect(y([5, 6, 7, 8])).toMatchObject({ 12: 12, 16: 16 });
});
