/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Find out what century it is given a year

EXPECTED INPUT: Int

EXPECTED OUTPUT: string

RULES:
  EXPLICIT
    - New centuries begin in years that end with 01
    - 1901 - 2000 comprise the 20th century.
    - return value should be a string
    - ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
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

EXAMPLE 1: 2000
OUTPUT: "20th"


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
1. Divide the year by 100
2. Drop any decimals
3. Add 1 unless remainder equals 0
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
function century(year) {
  let remainder = year % 10;
  let century = 0;

  if (remainder === 0) {
    century = Math.floor(year / 100);
  } else {
    century = Math.floor(year / 100) + 1;
  }

  console.log(formatResult(century));
  return formatResult(century);
}

function formatResult(century) {
  let lastDigit = century % 10;
  let lastTwoDigits = century % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return String(century) + "th";
  }

  switch (lastDigit) {
    case 1:
      return String(century) + "st";
    case 2:
      return String(century) + "nd";
    case 3:
      return String(century) + "rd";
    default:
      return String(century) + "th";
  }
}


// TEST CASES:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
