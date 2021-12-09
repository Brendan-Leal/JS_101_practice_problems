/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- given a list of numbers add the first number to the sum of the first and
second number, then add that sum to the sum of the 1st, 2nd, and 3rd number
ect. untill you've reached the end of the list.

EXPECTED INPUT: Array

EXPECTED OUTPUT: Number

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

MENTAL MODEL:
-
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1: [3, 5, 2]
OUTPUT: (3) + (3 + 5) + (3 + 5 + 2) --> 21


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
1. take the sum of every number in the list save its value
2. remove the last number in the list
3. take the sum of the list and add its value to the previous saved one
4. repeate until you have only one number to add the previous saved one
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
function sumOfSums(array) {
  let runningTotal = 0;

  do {
    runningTotal += array.reduce((num, nextNum) => num + nextNum);
    array.pop();
  } while (array.length > 0);

  console.log(runningTotal);
}
// TEST CASES:
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
