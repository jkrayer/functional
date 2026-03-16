# Monet
https://monet.github.io/monet.js/#maybe

## .map
(a -> b) -> Maybe(b);

## .flatMap (.bind, .chain)
(a -> Maybe(b)) -> Maybe(b)

## .isSome
-> Boolean

## .isNothing
-> Boolean

## .some (.just)
-> a

## .orSome
b -> a || b

## .orElse
Maybe(b) -> Maybe(a) || Maybe(b)

## .ap (.apply)
Maybe(function) -> Maybe(b)

## .filter
function -> Maybe(a);

## .toEither (.toValidation)
err -> Either(err, a)

## .toList
-> List(a)

# James Sinclair
https://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/

## .of
Maybe(a)

## .isNothing
-> Boolean

## .map
fn -> Maybe(b)

## .join
-> a

## .chain
fn -> b

## .orElse
b -> a || Maybe(b)

## .ap (takes a maybe containing a value and applies the function stored in this maybe to it)
~~Maybe(a) -> Maybe(fn) -> Maybe(b)~~
Maybe(fn).ap(Maybe(a)) -> Maybe(b)

# Mostly Adequate Guide
https://drboolean.gitbooks.io/mostly-adequate-guide/ch8.html

## .of
Maybe(a)

## .isNothing
-> Boolean

## .map
fn -> Maybe(null) || Maybe(b)
