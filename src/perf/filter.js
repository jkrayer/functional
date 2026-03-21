const filter = (f) => (xs) => {
  let i = 0;
  let j = xs.length;
  let result = [];

  while (i < j) {
    if (f(xs[i])) result.push(xs[i]);
    i++;
  }

  return result;
};

const faq = (f) => (xs) => xs.filter(f);

// const iterations = 1000000;
const iterations = 1;

// Function #1: 45.629ms
function f1() {
  console.time("Function #1");
  for (var i = 0; i < iterations; i++) {
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => x % 2 === 0);
  }
  console.timeEnd("Function #1");
}
f1();

// Function #2: 78.337ms
function f2() {
  console.time("Function #2");
  for (var i = 0; i < iterations; i++) {
    filter((x) => x % 2 === 0)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
  console.timeEnd("Function #2");
}
f2();

// Function #3: 129.711ms
function f3() {
  console.time("Function #3");
  for (var i = 0; i < iterations; i++) {
    faq((x) => x % 2 === 0)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
  console.timeEnd("Function #3");
}
f3();

// Function #4: 45.62ms
function f4() {
  console.time("Function #4");
  const even = faq((x) => x % 2 === 0);
  for (var i = 0; i < iterations; i++) {
    even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
  console.timeEnd("Function #4");
}
f4();

const xs = new Array(10000).fill(0).map((_, i) => i);

// 0.338ms @ 10,000 records 1 time
// Function #5: 1:22.201 (m:ss.mmm) @ 10,000 records 1 mil times
function f5() {
  console.time("Function #5");
  const even = (x) => x % 2 === 0;
  for (var i = 0; i < iterations; i++) {
    xs.filter(even);
  }
  console.timeEnd("Function #5");
}
f5();

// 0.251ms @ 10,000 records 1 time
// Function #6: 28.500s @ 10,000 records 1 mil times
function f6() {
  console.time("Function #6");
  const even = faq((x) => x % 2 === 0);
  for (var i = 0; i < iterations; i++) {
    even(xs);
  }
  console.timeEnd("Function #6");
}
f6();
