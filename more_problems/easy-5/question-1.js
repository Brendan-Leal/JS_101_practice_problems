/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Givin a number convert it to degrees, minutes, seconds.

EXPECTED INPUT: Int or float

EXPECTED OUTPUT: String

RULES:
  EXPLICIT
    - use a degree symbol (˚)
    - single quote (') to represent minutes
    - double quote (") to represent seconds
    - 60 minutes in a degree, and 60 seconds in a minute.
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


-------------------------Data Structures and Algorithm--------------------------
1. Set degrees to the whole number without the decimal places
2. Subtract the (whole number - the decimal) portion to get the remaining decimal
3. set the minutes to the remaining decimal * 60 rounding to the nearest whole
number
4. set the remaing decimal from the previous operation * 60, rounding to the
nearest whole number, to the seconds.
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
function dms(angle) {
  let dmsArray = setRawValues(angle);

  dmsArray = dmsArray.map((element, i) => {
    if (element === "0" && i !== 0) {
      return element += "0";
    } else if (Number(element) <= 9) {
      return "0" + element;
    } else {
      return element;
    }
  });

  dmsArray = dmsArray.map((element, i) => {
    if (i === 0) {
      return element += "°"
    } else if (i === 1) {
      return element += '\'';
    } else {
      return element += "\"";
    }
  });
  console.log(dmsArray.join(""));
}

function setRawValues(angle) {
  let degrees = String(Math.floor(angle));
  let minutes = String(Math.floor((angle - Math.floor(angle)) * 60));
  let rawSeconds = ((angle - Math.floor(angle)) * 60) - Math.floor((angle - Math.floor(angle)) * 60);
  let seconds = String(Math.floor(rawSeconds * 60));

  return [degrees, minutes, seconds]
}

// TEST CASES:
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(180.159)
