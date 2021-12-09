/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given a number that represents the number of digits in a number find the first
occurence in the fibonacci series where a number of that many digits occures

EXPECTED INPUT: Int

EXPECTED OUTPUT: Int

RULES:
  EXPLICIT
    - Index starts at 1
    - argument is always an integer greater than or equal to 2
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

EXAMPLE 1: 2
OUTPUT: 7

EXAMPLE 2:
OUTPUT:


---------------------------Data Structures and Algorithm------------------------
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

--------------------------------------------------------------------------------
1. Calulate the fibonacci series
2. keep track of how many numbers have been Calulated
3. keep track of the length of each digit returned
4. upon the first digit that is the same length as desired stop calculateing the
fibonacci series.
5. return how many numbers have been calculated.
6.
7.
8.
9.
10.
*/
//-----------------------------------Code---------------------------------------
function findFibonacciIndexByLength(numb) {
  let previousNum = 1;
  let nextNum = 1;
  let index = 2;
  let fib;

  do {
    fib = previousNum + nextNum;
    index += 1;
    previousNum = nextNum;
    nextNum = fib;
  } while (String(fib).length < numb);

  console.log(index);
  return index;
}

// TEST CASES:
findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
