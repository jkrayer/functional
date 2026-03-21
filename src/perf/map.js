const map = (f) => (xs) => {
  let i = 0;
  let j = xs.length;
  let result = new Array(j);

  while (i < j) {
    result[i] = f(xs[i]);
    i++;
  }

  return result;
};

const maq = (f) => (xs) => xs.map(f);

// const iterations = 1000000;
const iterations = 1;

// Function #1: 39.906ms
function f1() {
  console.time("Function #1");
  for (var i = 0; i < iterations; i++) {
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => x * 2);
  }
  console.timeEnd("Function #1");
}
f1();

// Function #2: 61.322ms
function f2() {
  console.time("Function #2");
  for (var i = 0; i < iterations; i++) {
    map((x) => x * 2)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
  console.timeEnd("Function #2");
}
f2();

// Function #3: 118.053ms
function f3() {
  console.time("Function #3");
  for (var i = 0; i < iterations; i++) {
    maq((x) => x * 2)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
  console.timeEnd("Function #3");
}
f3();

// Function #4: 37.955ms
function f4() {
  console.time("Function #4");
  const mult = maq((x) => x * 2);
  for (var i = 0; i < iterations; i++) {
    mult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
  console.timeEnd("Function #4");
}
f4();

const xs = new Array(10000).fill(0).map((_, i) => i);

// Function #5: 1:20.613 (m:ss.mmm) @ 10,000 records 1 mil times
// Function #5: 15:31.970 (m:ss.mmm) @ 100,000 records 1 mil times
function f5() {
  console.time("Function #5");
  const mult = (x) => x * 2;
  for (var i = 0; i < iterations; i++) {
    xs.map(mult);
  }
  console.timeEnd("Function #5");
}
f5();

// Function #6: 27.466s @ 10,000 records 1 mil times
// Function #6: 14:39.815 (m:ss.mmm) @ 100,000 records 1 mil times
function f6() {
  console.time("Function #6");
  const mult = maq((x) => x * 2);
  for (var i = 0; i < iterations; i++) {
    mult(xs);
  }
  console.timeEnd("Function #6");
}
f6();
