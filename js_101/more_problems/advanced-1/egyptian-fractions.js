/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: that takes a Rational number as an argument, and returns an
Array of the denominators that are part of an Egyptian Fraction representation
of the number


WRITE THE PROBLEM IN YOUR OWN WORDS:
-

EXPECTED INPUT: A fraction object

EXPECTED OUTPUT: an array

RULES:
  EXPLICIT
    -
    -
    -
  IMPLICIT (What's not stated in the problem?)
    -
    -
    -

QUESTIONS:
-
-
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1:
OUTPUT:


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
- Given a fraction object.
  -If it is a whole number return the same number of 1's as the whole number
  in an array
  - If it is a rational number divide the numerator by the denominator.
    Check if there is a whole number.
      If it is a whole number return the same number of 1's as the whole number
      in an array
    If it is not a whole number or there is a remainder
      convert the decimal without the whole numeber (0.xxxxx) to a Fraction
      What ever the numerator is add that many denominators to the returned
      array

-
-
-
-
-
-
-
*/
//-----------------------------------Code---------------------------------------
var Fraction = require('fraction.js');

function egyptian(fractionObject) {
  let egyptianDenominators = [];

  if (isWholeNumber(fractionObject)) {
    setDenominators(fractionObject.n, egyptianDenominators);
    // console.log(egyptianDenominators);
    return egyptianDenominators;
  } else {
    let wholeNumber = getWholeNumber(fractionObject);
    setDenominators(wholeNumber, egyptianDenominators);

    let remainder = (fractionObject.n / fractionObject.d) - wholeNumber;
    let remainderAsFraction = new Fraction(remainder);
    // console.log(remainderAsFraction);

    for (let i = 0; i < remainderAsFraction.n; i++) {
      egyptianDenominators.push(remainderAsFraction.d);
    }
    // console.log(egyptianDenominators);
    return egyptianDenominators;
  }
}

function isWholeNumber(fractionObject) {
  return fractionObject.d === 1;
}

function getWholeNumber(fractionObject) {
  return Math.floor(fractionObject.n / fractionObject.d);
}

function setDenominators(times, egyptianDenominators) {
  for (let i = 0; i < times; i++) {
    egyptianDenominators.push(1);
  }
}

function unegyptian(denominatorsArray) {
  return denominatorsArray.reduce((accum, num) => {
    return accum + new Fraction(1, num);
  }, new Fraction(0));
}





// TEST CASES:
console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
