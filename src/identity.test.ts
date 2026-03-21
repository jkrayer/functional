import { describe, it, expect } from "vitest";
import { identity } from "./identity";

describe("identity", () => {
  it("should return the same value for a number", () => {
    expect(identity(42)).toBe(42);
  });

  it("should return the same value for a string", () => {
    expect(identity("hello")).toBe("hello");
  });

  it("should return the same value for a boolean", () => {
    expect(identity(true)).toBe(true);
  });

  it("should return the same value for an object", () => {
    const obj = { a: 1, b: 2 };
    expect(identity(obj)).toBe(obj);
  });

  it("should return the same value for an array", () => {
    const arr = [1, 2, 3];
    expect(identity(arr)).toBe(arr);
  });

  it("should return null", () => {
    expect(identity(null)).toBe(null);
  });

  it("should return undefined", () => {
    expect(identity(undefined)).toBe(undefined);
  });

  it("should preserve type for generic types", () => {
    const value: { x: number } = { x: 10 };
    const result = identity(value);
    expect(result.x).toBe(10);
  });
});
