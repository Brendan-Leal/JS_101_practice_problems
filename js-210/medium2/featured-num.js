/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

INPUT: A number int
OUTPUT:  the next featured number based of some criteria

Explicit Rules:

A featured number:
odd 
multiple of 7
All digits occurring exactly once

Implicit Rules:

Questions:

-----------------------------Examples------------------------------






------------------Data Structures and Algorithm--------------------
validate input:
    if input is not a number issue error
    if input is greater than 9876543201 issue err

Check if input number is a multiple of 7
    - If not find the next multiple of 7 greater than input num
    
Once you have the next multiple of 7
check if its odd
chekc if all digits occure once
-If it passes the return the number 
- Otherwise increse the number by 7 and run the check again. Continue this until is is 9876543201. If it exceeds this number then issue err msg


*/
//---------------------------Code with Intent----------------------
function featured(number) {
    let err = "There is no possible number that fulfills those requirements.";
    let greatesFtNum = 9876543201;
    let nextFtNumFound = false;

    if (typeof number !== "number" || number > greatesFtNum) return err;

    while (!nextFtNumFound && number < greatesFtNum) {
        if (isMultipleOf7(number)) {
            number += 7;
            if(number % 2 !== 0 && isAllUnique(number)) {
                nextFtNumFound = true;
            }
        } else {
            number = nextMultipleOf7(number);
            if(number % 2 !== 0 && isAllUnique(number)) {
                nextFtNumFound = true;
            }
        }
    }

    if (nextFtNumFound) {
        return number;
    } else {
        return err;
    }

}

function isAllUnique(number) {
    let digitsArr = String(number).split("");
    return digitsArr.every((digit, index) => {
        return digitsArr.indexOf(digit) === index;
    });
}

function nextMultipleOf7(number) {
    while (number % 7 !== 0) {
        number += 1;
    }
    return number;
}

function isMultipleOf7(number) {
    return number % 7 === 0;
}



//Test Cases:
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."


console.log(featured(-14)); // 7
console.log(featured()); /// err
console.log(featured(""));