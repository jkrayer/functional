# functional

A functional library written from scratch in Typescript, tested and focused on speed.

All functions are written in "curried" style like `() => () => result` instead of depending on a `curry` utility keeping them independent and easy to understand. As often as possible these functions are small wrappers around Javascript's native methods.

## Notes

For better or worse Javascript has two values that represent the absence of a value; `undefined` and `null`. Generally speaking we consider that `undefined` represents the un-intentional absence of a value and `null` to be intentional. This library converts `undefined` to `null`.

## Functions

<!--
### apply ??

`apply :: (a -> b) -> a -> b`

<small>Since v 0.0.0</small>

Saves a reference to a function and returns a function that takes a single argument. Applies the provided to the original function.

```ts
const double = (x: number) => x * 2;
apply(double)(5); //=> 10
```
-->

### compose

`compose :: (b -> c) -> (a -> b) -> a -> c`

<small>Since v 0.0.0</small>

Composes two functions together and returns a new function that takes a single value. That value is applied to the right-most function first, its returned values is in turn applied to the left most function.

```ts
const add = (a) => (b) => a + b;
const increment = add(1);
const double = (x) => x * 2;
const incDouble = compose(double)(inc);
incDouble(4); // => 10
```

### constant (K)

`constant :: a -> () -> a`

<small>Since v 0.0.0</small>

A function that takes a value and returns a function that, when called, returns the original value.

```ts
constant(42)(); //=> 42
```

### filter

`filter :: (a -> Boolean) -> [a] -> [a]`

<small>Since v 0.0.0</small>

A function that takes a predicate function and returns a function that takes an array. When called the predicate is applied to each member of the array. An array of the passing members is returned.

```ts
const isEven = (x) => x % 2 === 0;
filter(isEven)([1, 2, 3, 4, 5, 6]); // => [2, 4, 6]
```

### fromPairs

`fromPairs :: [[a, b]] -> { a: b }`

<small>Since v 0.0.0</small>

A function that takes an array of tuples and returns an object.

```ts
const isEven = (x) => x % 2 === 0;
filter(isEven)([1, 2, 3, 4, 5, 6]); // => [2, 4, 6]
```

### head

`head :: [a] -> a | null`

<small>Since v 0.0.0</small>

A function that returns the first member of the provided array. If the first is `undefined` this function will return `null`.

```ts
const isEven = (x) => x % 2 === 0;
filter(isEven)([1, 2, 3, 4, 5, 6]); // => [2, 4, 6]
```

### identity

`identity :: a -> a`

<small>Since v 0.0.0</small>

A function that returns the value provided to it.

```ts
identity(1); // => 1
```

### isNil

`isNil :: a -> Boolean`

<small>Since v 0.0.0</small>

A predicate function that tests if the provided value is "nil" where "nil" is defined as either `undefined` or `null`.

```ts
isNil(undefined); // => true
isNil(null); // => true
isNil(0); // => false
isNil([]); // => false
```

### join

`join :: a -> [b] -> c`

<small>Since v 0.0.0</small>

Join takes a string and returns a function that takes an array. The provided array is joined on the original string.

```ts
const commaJoin = join(", ");
commaJoin([1, 2, 3]); // => "1, 2, 3"
```

### map

`map :: (a -> b) -> [a] -> [b]`

<small>Since v 0.0.0</small>

Map takes a function that transforms a value (a) into another value (b) and returns a function that applies the transformation to an array returning a new array of the same length with the transformed values.

```ts
const double = (x) => x * 2;
const doubleAll = map(double);
doubleAll([1, 2, 3]); // => [2, 4, 6]
```

### partial

`partial :: (a -> b -> c) -> a -> b -> c`

<small>Since v 0.0.0</small>

Partial takes a binary function and returns two unary functions that when called applies the arguments in order to the original function.

Used to convert binary functions into unary functions for composition.

```ts
const add = (a, b) => a + b;
const increment = partial(add)(1);
increment(3); // => 4
```

### partialRight

`partial :: (a -> b -> c) -> b -> a -> c`

<small>Since v 0.0.0</small>

Partial right takes a binary function and returns two unary functions that when called applies the arguments in reverse order to the original function.

Used to convert binary functions into unary functions for composition.

```ts
const toInt = partial(parseInt)(10);
increment("3"); // => 3
```

### path

`path :: [String | Number] -> Object | Array -> Maybe a`

<small>Since v 0.0.0</small>

Path takes a list of strings and numbers that represent the location of a deeply nested value and returns a function that finds that value in the provided object. Returns `null` if the value can't be found.

```ts
const nestedVal = path(["a", 1, "b"]);
nestedVal({ a: [] }); // => null
nestedVal({ a: [{}, { b: 2 }] }); // => 2
```

### reduce

`reduce :: (a -> b -> c) -> d -> ([b]) -> d`

<small>Since v 0.0.0</small>

Like `map`, `reduce` applies a function to each member of an array and returns a new value. `reduce` may however return a value of any kind where map may only return an array of equal length. `reduce` is most often useful to combine successive calls to `map` and `filter`.

```ts
const add = (a, b) => a + b;
reduce(add)(0)([1, 2, 3]); // => 6
```

### setA

`setA :: (a) -> (b -> c) -> [b] -> [c]`

<small>Since v 0.0.0</small>

Applies a function to the value at a given index and returns a new array with the modified value.

```ts
setA(2)(() => 10)([1, 2, 3, 4, 5]); // => [1, 2, 10, 4, 5]
```

### setO

`setA :: (a) -> (b -> c) -> { a: b } -> { a: c }`

<small>Since v 0.0.0</small>

Applies the given function to the value at the given key and returns a new object with the modified value.

```ts
setO("c")(() => 10)({ a: 1, b: 2, c: 3, d: 4, e: 5 });
// => { a: 1, b: 2, c: 10, d: 4, e: 5 }
```

### split

`split :: a -> b -> [c]`

<small>Since v 0.0.0</small>

Splits a string into an array of strings by the provided string or regular expression.

```ts
split(/,\s?/)("1, 2,3"); // => ["1", 2", "3"]
```

<!-- ### thrush -->

### toPairs

`toPairs :: { a: b } -> [[a, b]]`

A function that takes an object and returns an array of tuples.

```ts
toPairs({ a: 1, b: 2 }); //=> [['a', 1], ['b', 2]]
```
