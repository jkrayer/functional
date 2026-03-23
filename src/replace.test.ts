import { expect, test } from "vitest";
import { replace } from "./replace";

test("replaces string with another string", () => {
  const replaceHello = replace("hello")("hi");
  expect(replaceHello("hello world")).toBe("hi world");
});

test("replaces only first occurrence of string by default", () => {
  const replaceA = replace("a")("x");
  expect(replaceA("banana")).toBe("bxnana");
});

test("replaces all occurrences with global regex", () => {
  const fixSpaces = replace(/\s+/g)(" ");
  expect(fixSpaces("This  is a  string   with bad  spaces.")).toBe(
    "This is a string with bad spaces.",
  );
});

test("works with regex and replacement string", () => {
  const replaceDigits = replace(/\d/g)("X");
  expect(replaceDigits("abc123def456")).toBe("abcXXXdefXXX");
});

test("replaces with empty string", () => {
  const removeVowels = replace(/[aeiou]/g)("");
  expect(removeVowels("hello")).toBe("hll");
});

test("handles case insensitive regex", () => {
  const replaceHello = replace(/hello/i)("hi");
  expect(replaceHello("HELLO world")).toBe("hi world");
});

test("returns unchanged string when pattern not found", () => {
  const replaceXyz = replace("xyz")("abc");
  expect(replaceXyz("hello world")).toBe("hello world");
});

test("replaces at start of string", () => {
  const replaceStart = replace(/^The/)("A");
  expect(replaceStart("The quick brown fox")).toBe("A quick brown fox");
});

test("replaces at end of string", () => {
  const replaceEnd = replace(/world$/)("universe");
  expect(replaceEnd("hello world")).toBe("hello universe");
});

test("works with special characters", () => {
  const replaceDot = replace(".")("!");
  expect(replaceDot("hello.world")).toBe("hello!world");
});
