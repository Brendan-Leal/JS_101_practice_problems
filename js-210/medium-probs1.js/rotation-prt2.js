/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
Write a function that rotates the last n digits of a number. For the rotation, rotate by 
one digit to the left, moving the first digit to the end.

INPUT: A number as an in and another number that rep. the rotation
OUTPUT: A single int

Explicit Rules:

Implicit Rules:

Questions:
What if the rotation number is greater than the number of digits in the input
-----------------------------Examples------------------------------
735291
   912


735291
52913
752913


123456789  r=4
9 - 4 = 5
start removing at index 5
------------------Data Structures and Algorithm--------------------
If the rotate number is neg take the abs val of the rotate number and continue 

If the rotate number is greater than the length of the input number:
    take the rotate number and subtract the length of the input number as many times untill the rotate number is less than or equal to the length of the input number 


split the input number into an array of digits 
    turn it into a string 
    split 

Remove the rotating portion
 The index to start removing elems from the array of numbers is the length of the array - the rotation value
 Remove the numbers from that index all the way to the end of the array
 save those values

 call rotating function
 concat the rotated array to the end of the array of numbers 
 join and convert to number
 return number
*/
//---------------------------Code with Intent----------------------
function rotateRightmostDigits(number, rotateValue) {
    if (rotateValue < 0) {
        rotateValue *= -1;
    }
    let digitsArr = String(number).split("");

    if (rotateValue > digitsArr.length) {
        while (rotateValue > digitsArr.length) {
            rotateValue -= digitsArr.length;
        }
    }
    let removeIndex = digitsArr.length - rotateValue;
    let rotatePortion = digitsArr.splice(removeIndex);

    rotatePortion = rotateArray(rotatePortion);
    digitsArr = digitsArr.concat(rotatePortion);
    return Number(digitsArr.join(""));
}

function rotateArray(array) {
    if (!Array.isArray(array) || array === undefined) return undefined;
    if (array.length === 0) return array;

    let arrCopy = array.slice();
    let firstElem = arrCopy.shift();
    arrCopy.push(firstElem);
    return arrCopy;
}

//Test Cases:
// console.log(rotateRightmostDigits(735291, 1));     // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));     // 735912
// console.log(rotateRightmostDigits(735291, 4));     // 732915
// console.log(rotateRightmostDigits(735291, 5));     // 752913
// console.log(rotateRightmostDigits(735291, 6));     // 352917

console.log(rotateRightmostDigits(735291, 13));     // 352917









