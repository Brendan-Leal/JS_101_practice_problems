/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given either a positive or negative number representative of the number of
minutes before or after midnight return its equivalent value in 24hr time

EXPECTED INPUT: Positive or negetive number

EXPECTED OUTPUT: String

RULES:
  EXPLICIT
    - Can't use Date class methods.
    - If number of minutes is negative, time is before midnight.
    - Format output as 24hr hh:mm
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
                        Converting a number into hr:mm
** positive numbers **
1. minutes / 60 = hours
  remainder * 60 = minutes
2. Subtract 60 from the minutes until the minutes are less than 60.
  Each time you subtract 60 add 1 to the hours value. let the minutes be the
  remaining value
** negativ numbers **


--------------------------------------------------------------------------------
      Format time
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
function timeOfDay(rawMinutes) {
  const MINUTES_IN_HOUR = 60;
  const MINUTES_IN_DAY = 1440;
  let hours = 0;
  let minutes = 0;

  if (minutesAreNegative(rawMinutes)) {
    rawMinutes = (rawMinutes % MINUTES_IN_DAY) + MINUTES_IN_DAY;
    hours = Math.floor(rawMinutes / MINUTES_IN_HOUR);
    minutes = rawMinutes % MINUTES_IN_HOUR;
  } else {
    hours = calculateHours(rawMinutes);
    minutes = calculateMinutes(rawMinutes);
  }
  return formatTime(hours, minutes);
}

function formatTime(hours, minutes) {
  if (hours < 10) {
    hours = "0" + String(hours);
  } else {
    hours = String(hours);
  }

  if (minutes < 10) {
    minutes = "0" + String(minutes);
  } else {
    minutes = String(minutes);
  }

  return hours + ":" + minutes;
}

function calculateMinutes(rawMinutes) {
  while (rawMinutes >= 60) {
    rawMinutes -= 60;
  }
  return rawMinutes;
}

function calculateHours(rawMinutes) {
  let hours = 0;
  while (rawMinutes >= 60) {
    rawMinutes -= 60;
    hours += 1;
  }

  while (hours > 24) {
    hours -= 24;
  }
  return hours;
}

function minutesAreNegative(minutes) {
  return minutes < 0;
}


// TEST CASES:
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
