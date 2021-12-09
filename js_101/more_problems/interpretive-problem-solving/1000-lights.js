/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT:
You have a bank of switches before you, numbered from 1 to count. Every switch
is connected to exactly one light that is initially off. You walk down the row
of switches and toggle every one of them, that is, you flip every switch. All
the lights are now on. You walk back to the beginning of the row and start
another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now,
every other light is on. On the third pass, you go back to the beginning again,
this time toggling switches 3, 6, 9, and so on. You continue to repeat this
process until you have made count passes.

Write a program that takes one argument—the total number of switches—and returns
an array of the lights that are on after count passes.


WRITE THE PROBLEM IN YOUR OWN WORDS:
- Pattern:
first pass through every light is toggled
2nd pass through every second switch is toggled
3rd pass through every third switch is toggled

EXPECTED INPUT: A number

EXPECTED OUTPUT: Array

RULES:
  EXPLICIT
    - Array of switches is initially off
    - First pass through the array turnning every switch on
    - second pass through the array toggle even numberd switches
    - third pass through the array toggle odd switches
  IMPLICIT (What's not stated in the problem?)
    -
    -
    -

QUESTIONS:
-
-
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1: 5
OUTPUT:[1, 4]


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
- Initialize an array that represents the switch board. Off set the array so
we don't deal with the 0th index. Set all switches to on.
- While the value of your current pass through is less than or equal to the
amount of switches
  Save the value of the current switch state
  if the index of the first value of the array is divisable by the current
  pass through value AND it is not the 0th index
    toggle the switch
  Otherwise do nothing.
  Do another pass through.
- Change all the values in the switch board array that are "on" to their index
values.
- Filter out any values in the switch board array that are "off"
- Remove the off set value of the switchboard array.
*/
//-----------------------------------Code---------------------------------------
function lightsOn(switches) {
  // Switch board is initialized so that all lights are on. Therefore, you have
  // already made your first pass through.
  let switchBoard = initializeSwitchBoard(switches);
  passThroughSwitches(switches, switchBoard);
  let lightStatus = formatSwitchState(switchBoard);

  console.log(lightStatus);
  return lightStatus;
}

function passThroughSwitches(switches, switchBoard) {
  let currentPassThrough = 2;

  while (currentPassThrough <= switches) {

    for (let index = 0; index < switchBoard.length; index++) {
      let switchState = switchBoard[index];

      if (index % currentPassThrough === 0 && index !== 0) {
        switchBoard[index] = toggleSwitch(switchState);
      }
    }
    currentPassThrough += 1;
  }
}

function initializeSwitchBoard(switches) {
  let switchBoard = ["OffSet"];

  for (let i = 0; i < switches; i++) {
    switchBoard.push("on");
  }
  return switchBoard;
}

function formatSwitchState(switchBoard) {
  switchBoard = switchBoard
    .map((switchState, index) => {
      if (switchState === "on") {
        return index;
      } else {
        return switchState;
      }
    })
    .filter(switchState => switchState !== "off");
  switchBoard.shift();
  return switchBoard;
}

function toggleSwitch(switchState) {
  return switchState === "on" ? "off" : "on";
}

// TEST CASES:
lightsOn(5);        // [1, 4]
// lightsOn(4)
lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
lightsOn(69);


// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
