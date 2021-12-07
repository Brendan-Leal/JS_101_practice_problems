/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given an int convert it to a string

EXPECTED INPUT: int

EXPECTED OUTPUT: string

RULES:
  EXPLICIT
    - cannot use string(), toString()
    - CAN use Math.sign()
    -
  IMPLICIT (What's not stated in the problem?)
  -
  -
  -

QUESTIONS:
-
-
-

MENTAL MODEL:
-
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1: 4321
OUTPUT: "4321"


EXAMPLE 2: 0
OUTPUT: "0"


---------------------------Data Structures and Algorithm------------------------
use a switch case to determin how to handle each case of +, -, or no sign

--------------------------------------------------------------------------------
Upon calling signedIntegerToString
1. Determin if the number is positive or negative
2. In the case of a positive number call the integerToString function
  -return the final value with a "+" appended to the front.
3. In the case of a negative number pass the number multiplied by -1 into the
integerToString function
  -append a "+" to the front of the return value and return it.
4. In the case of 0
5.
6.
7.
8.
9.
10.
*/
//-----------------------------------Code---------------------------------------
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  // console.log(`result is ${result} and its data type is ${typeof result}`);
  return result;
}

function signedIntegerToString(numb) {
  let sign = Math.sign(numb);

  switch (sign) {
    case -1:
      return "-" + integerToString(numb * -1);

    case 1:
      return "+" + integerToString(numb);

    default:
      return integerToString(numb);
  }
}



// TEST CASES:
// signedIntegerToString(-123);
// signedIntegerToString(4321);
// signedIntegerToString(0);

console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(0) === "0");
