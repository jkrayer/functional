const setA = (i) => (f) => (a) => {
  const copy = a.slice();
  copy[i] = f(a[i]);
  return copy;
};

const setO = (i) => (f) => (o) => ({
  ...o,
  [i]: f(o[i]),
});

const setO1 = (i) => (f) => (o) => {
  const copy = { ...o };
  copy[i] = f(o[i]);
  return copy;
};

const setR = (i) => (f) => (x) =>
  Array.isArray(x) ? setA(i)(f)(x) : setO(i)(f)(x);

const set1 = (i) => (f) => (x) => {
  const copy = Array.isArray(x) ? [...x] : { ...x };
  copy[i] = f(x[i]);
  return copy;
};

// TEST
const iterations = 1000000;

const set = () => 10;

console.time("Function #1");
for (var i = 0; i < iterations; i++) {
  setR(12)(set)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
console.timeEnd("Function #1");

console.time("Function #3");
for (var i = 0; i < iterations; i++) {
  set1(12)(set)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
console.timeEnd("Function #3");

console.time("Function #5");
for (var i = 0; i < iterations; i++) {
  setA(12)(set)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
console.timeEnd("Function #5");

console.log("================================");

console.time("Function #2");
for (var i = 0; i < iterations; i++) {
  setR("l")(set)({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 1,
    l: 2,
    m: 3,
    n: 4,
    o: 5,
    p: 6,
    q: 7,
    r: 8,
    s: 9,
    t: 10,
  });
}
console.timeEnd("Function #2");

console.time("Function #4");
for (var i = 0; i < iterations; i++) {
  set1("l")(set)({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 1,
    l: 2,
    m: 3,
    n: 4,
    o: 5,
    p: 6,
    q: 7,
    r: 8,
    s: 9,
    t: 10,
  });
}
console.timeEnd("Function #4");

console.time("Function #6");
for (var i = 0; i < iterations; i++) {
  setO("l")(set)({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 1,
    l: 2,
    m: 3,
    n: 4,
    o: 5,
    p: 6,
    q: 7,
    r: 8,
    s: 9,
    t: 10,
  });
}
console.timeEnd("Function #6");

console.time("Function #7");
for (var i = 0; i < iterations; i++) {
  setO1("l")(set)({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 1,
    l: 2,
    m: 3,
    n: 4,
    o: 5,
    p: 6,
    q: 7,
    r: 8,
    s: 9,
    t: 10,
  });
}
console.timeEnd("Function #7");
