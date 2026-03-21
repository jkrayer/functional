import { expect, test } from "vitest";
import { split } from "./split";

test("splits string by string delimiter", () => {
  expect(split(",")("1,2,3")).toEqual(["1", "2", "3"]);
});

test("splits string by regex delimiter", () => {
  expect(split(/,\s?/)("1, 2,3")).toEqual(["1", "2", "3"]);
});

test("splits string with multiple character delimiter", () => {
  expect(split("::")("a::b::c")).toEqual(["a", "b", "c"]);
});

test("returns array with single element when no delimiter found", () => {
  expect(split(",")("hello")).toEqual(["hello"]);
});

test("handles empty string", () => {
  expect(split(",")("")).toEqual([""]);
});

test("handles string that starts with delimiter", () => {
  expect(split(",")(",a,b")).toEqual(["", "a", "b"]);
});

test("handles string that ends with delimiter", () => {
  expect(split(",")("a,b,")).toEqual(["a", "b", ""]);
});

test("handles consecutive delimiters", () => {
  expect(split(",")("a,,b")).toEqual(["a", "", "b"]);
});

test("splits by space character", () => {
  expect(split(" ")("hello world test")).toEqual(["hello", "world", "test"]);
});

test("splits by regex with word boundary", () => {
  expect(split(/\s+/)("a  b   c")).toEqual(["a", "b", "c"]);
});
