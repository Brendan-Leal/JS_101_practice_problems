/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Take a number n digits long and rotate the first digit to the end. Keeping the
first digit in place take the second digit and rotate it to the end. Keeping the
first 2 digits in place rotate the third digit to the end. repeate until you
cant rotate any digits.

EXPECTED INPUT: Number

EXPECTED OUTPUT: Number

RULES:
  EXPLICIT
    - Result is called the maximum rotation
    - Use the rotateRightmostDigits function.
    -
  IMPLICIT (What's not stated in the problem?)
  - Any leading zeros get droped.
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
|(7)35291
|35291(7)
3|(5)2917
3|2917(5)
32|(9)175
32|175(9)
321|(7)59
321|59(7)
3215|(9)7
3215|7(9)
OUTPUT: 321579


EXAMPLE 2: 105
OUTPUT: 15


-------------------------Data Structures and Algorithm--------------------------
1. Remove the first digit of a number and append it to the end of it. Save the
resulting value
2. Save the value of the first digit of the new number.
3. Then remove the first digit from the number saved in step 2.
5. repeate step 1.
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
function maxRotation(number) {
  let maximumRotation = [];
  let arrayOfDigits = String(number).split("");
  let rotationCount = arrayOfDigits.length;

  for (let i = 0; i < rotationCount; i++) {
    let digitToRotate = arrayOfDigits.shift();
    arrayOfDigits.push(digitToRotate);
    maximumRotation.push(arrayOfDigits.shift());
  }
  return maximumRotation.join("");
}

// TEST CASES:
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
