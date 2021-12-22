"use strict";
/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly
one light that is initially off. You walk down the row of switches and toggle every one of them.
You walk back to the beginning of the row and start another pass. On this second pass, you toggle 
switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time 
toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone 
through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the 
lights that are on after n repetitions.

INPUT: An int that represents the total number of switches
OUTPUT: array of light that are on

Explicit Rules:
- All lights initially start off. 
- n represents the total number of switches AND
- n represents the number of passes

Implicit Rules:

Questions:

-----------------------------Examples------------------------------
0 0 0 0 0
1 1 1 1 1 pass 1
1 0 1 0 1 pass 2
1 0 0 0 1 pass 3
1 0 0 1 1 pass 4
1 0 0 1 0 pass 5


1, 4, 9, 16, 25, 36, 49, 64, 81, 100
 +3 +5 +7 +9


n = 8
seqStart: 1
x = 3 
x = 5
x = 7

1, 4, 9, 16


------------------Data Structures and Algorithm--------------------
If the input is not a int return null
If the input is less than or equal to 0 return null


sequence starts at 1 ,ends at n, and is incremented by (x + 2) x initally starts at 3

To generate the next number in the sequence:
    add a value to the previous number
    that value initially start at 3
    add that to the previous value 
    the the next value is previous value + (x + 2)

If the next number generated is greater than or equal to n stop
return the sequence of numbers



loop that pushes the sequence value onto the result array
then increments the sequnce value appropriatly




*/
//---------------------------Code with Intent----------------------
function lightsOn(switches) {
    if (typeof switches !== "number") return null;
    if (switches <= 0) return null;

    let sequenceValue = 1;
    let incrementValue = 3;
    let result = [];

    for (let i = 1; i <= switches; i++) {
        if (sequenceValue === switches) {
            result.push(sequenceValue);
            break;
        } else if (sequenceValue > switches) {
            break;
        } else {
            result.push(sequenceValue);
            sequenceValue += incrementValue;
            incrementValue += 2;
        }
    }

    return result;
}

//Test Cases:
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(8));        // [1, 4]
console.log(lightsOn(64));       // [1, 4, 9, 16, 25, 36, 49, 64]
console.log(lightsOn("123")); // null
console.log(lightsOn([1, 2, 3]));    // null
console.log(lightsOn(true));    // null
console.log(lightsOn(-1));    // null
console.log(lightsOn(0));    // null
console.log(lightsOn(-18));    // null
console.log(lightsOn());
