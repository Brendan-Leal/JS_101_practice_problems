/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Create a function that takes 2 arguments and returns true if one and only one
of its arguments is true. Otherwise return false

EXPECTED INPUT: A truthy or falsy value

EXPECTED OUTPUT: true or false

RULES:
  EXPLICIT
    - Only one of the arguments can be true to return true
    - return a bool
    -
  IMPLICIT (What's not stated in the problem?)
  - All Values are truthy except for false, 0, -0, 0n, "", null, undefined and NaN
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

EXAMPLE 1:
OUTPUT:


EXAMPLE 2:
OUTPUT:


---------------------------Data Structures and Algorithm------------------------
1. Create an array of falsy values
2. If one argument equals any of those values in the array and the other doesn't
then return true
3. Otherwise return false.
4.
5.
6.
7.
8.
9.
10.

--------------------------------------------------------------------------------
1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
*/
//-----------------------------------Code---------------------------------------
function xor(arg1, arg2) {
  const FALSY_VALUES = [false, 0, -0, 0n, "", null, undefined, NaN];

  if (FALSY_VALUES.includes(arg1) && !FALSY_VALUES.includes(arg2)) {
    return true;
  } else if (FALSY_VALUES.includes(arg2) && !FALSY_VALUES.includes(arg1)) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES:
console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));
