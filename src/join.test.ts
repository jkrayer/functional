import { expect, test } from "vitest";
import { join } from "./join";

test("joins array of numbers with separator", () => {
  expect(join(", ")([1, 2, 3])).toBe("1, 2, 3");
});

test("joins array of strings with separator", () => {
  expect(join("-")(["a", "b", "c"])).toBe("a-b-c");
});

test("joins array with empty string separator", () => {
  expect(join("")(["x", "y", "z"])).toBe("xyz");
});

test("joins single element array", () => {
  expect(join(", ")(["only"])).toBe("only");
});

test("joins empty array", () => {
  expect(join(", ")([])).toBe("");
});

test("joins array with space separator", () => {
  expect(join(" ")(["hello", "world"])).toBe("hello world");
});

test("joins array with multi-character separator", () => {
  expect(join(" | ")(["one", "two", "three"])).toBe("one | two | three");
});

test("joins array of mixed types", () => {
  expect(join(";")(["a", 1, "b", 2])).toBe("a;1;b;2");
});

test("joins array with newline separator", () => {
  expect(join("\n")(["line1", "line2", "line3"])).toBe("line1\nline2\nline3");
});
