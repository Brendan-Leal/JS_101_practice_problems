/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given a string convert it to the data type number without using conventional
methods

EXPECTED INPUT: string

EXPECTED OUTPUT: a number of type Number

RULES:
  EXPLICIT
    - Cannot use parsInt(), Number(), String()
    - Assume that the input is a positive number of type string.
    - Assume that all input is valid
  IMPLICIT (What's not stated in the problem?)
  -
  -
  -

QUESTIONS:
- Can I use non-strict equality?
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
Given a string as input to a function:
1. Create an object of digits that holds string keys 0-9 and Number values 0-9
2. Create an empty result array to hold the final return value.
3. split the string into individual digits into an array of strings.
4. For each string digit in the array match its Number equivalent and push it to
the result array
5. Joint the results array
6. return the results.
7.
8.
9.
10.
--------------------------------------------------------------------------------
Subfunctionality to compare the string digits to their number equivalent through
the object
1. Iterate through the arrayOfStringsDigits
    -if the string digit matches any one of the objects keys push that objects
    value to the result array.
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

function stringToInteger(str) {
  const DIGITS = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9
  };

  let arrayOfStringsDigits = str.split("");
  let number = 0;

  for (let i = 0; i < arrayOfStringsDigits.length; i++) {
    if (DIGITS.hasOwnProperty(arrayOfStringsDigits[i])) {
      number = (number * 10) + DIGITS[arrayOfStringsDigits[i]];
    }
  }
  console.log(number);
  return number;
}


// TEST CASES:
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
stringToInteger("100")
