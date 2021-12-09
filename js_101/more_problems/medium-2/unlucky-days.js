/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given a year after 1752 determin how many friday the 13th there are.

EXPECTED INPUT: number that represents a year

EXPECTED OUTPUT: number that represents the number of friday The 13ths

RULES:
  EXPLICIT
    - year is after 1752
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

EXAMPLE 1: 1986
OUTPUT: 1


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
1. Iterate over each month in the year
2. keep track of each occurenc where the 13 day of the month is a friday
3.
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
function fridayThe13ths(year) {
  const FRIDAY = 5;
  let thirteenthCount = 0;

  for (let month = 0; month < 12; month++) {
    let dayOfWeek = new Date(year, month, 13).getDay();

    if (dayOfWeek === FRIDAY) {
      thirteenthCount += 1;
    }
  }
  console.log(thirteenthCount);
  return thirteenthCount;
}

// TEST CASES:
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
