/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Convert an int to a string without using established methods

EXPECTED INPUT: Number

EXPECTED OUTPUT: A string

RULES:
  EXPLICIT
    - Cannot use String(), toString() or concatenation.
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
1. Create a constant array of String numbers called DIGITS that will hold the
individual
2. Create a temporary variable and assign it the same value as the function
argument digits of the number passed into the function.
3. create an empty array called digitsArray that will hold the numbers
individual digits
4. While the temporary variable is greater than 1
- divide by 10 and push its remainder to digitsArray
  - reassign the temp variable to itself divided by 10
  - repeat loop
4. reverse the digitsArray
5. For every element in the digitsArray that matches the index of the DIGITS
array
  -Push the value that corresponds to that index to the final result array
6. join the final results array into one string and return it.
7.
8.
9.
10.

--------------------------------------------------------------------------------
For every element in the digitsArray that matches an index of the DIGITS
array

1. Iterate over the digitsArray and find the matching index in the DIGITS array
2. push that value to the finalResult array
3.
4.
5.
6.
7.
8.
9.
10.

if you can find a way to insert the string representation of the integer
(instead of the digit itself) in your while block (lines 93-97), then you
can eliminate the later for loops.
*/
//-----------------------------------Code---------------------------------------
function integerToString(number) {
  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let temp = number;
  let digitsArray = [];
  let finalResult = [];

  if (temp === 0) {
    digitsArray = [0];

  } else {
    while (temp > 1) {
      digitsArray.push(temp % 10);
      temp /= 10;
      temp = Math.floor(temp);
    }
    digitsArray.reverse();
  }

  for (let i = 0; i < digitsArray.length; i++) {
    for (var j = 0; j < DIGITS.length; j++) {
      if (digitsArray[i] === j) {
        finalResult.push(DIGITS[j]);
      }
    }
  }
  console.log(finalResult.join(""));
  return finalResult.join("");
}

// TEST CASES:
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"
