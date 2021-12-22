/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

INPUT: 3 Ints
OUTPUT: String that ids the triangle

Explicit Rules:
Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

Valid triangle:
3 sides
the 2 shorter sides must sum to be greater than the longest side
every side length is greater than 0

triangle is invalid if above condition are not meet

Implicit Rules:

Questions:

-----------------------------Examples------------------------------




------------------Data Structures and Algorithm--------------------
Validate the input 
    - If no arguments present not valid
    - check if all arguments are numbers 
    - If all three args are numbers 
        - check if all three numbers are greater than 0 AND
        - Check if the 2 shorter sides sum to be greater than the longest side
        - If not return invalid

Check if the 2 shorter sides sum to be greater than the longest side
    - sort the numbers from smallest to greatest
    - sum the first 2 numbers 
    - compare the sum with the last number in the list
        - If sum is greater than last num return valid
        - otherwise invalid

Check if the triangle is Equilateral
    - If all 3 arguments are the same number then return Equilateral

If it's not eqilateral chekc if its 
    - Check if all three arguments are differnet values
    - IF they are return Scalene

If not Equilateral or scalene check if it is isosceles
    find the number of occurences of each value in the list 
    If you end up with a 2 to 1 count then it is isosceles

    {
        3: 2
        1.5: 1
    }



If none of the 3 test return a value return invalid




*/
//---------------------------Code with Intent----------------------
function triangle(...args) {
    let sides = args;
    if (isValidTriangle(sides)) {
        if (isEquilateral(sides)) {
            return "equilateral";
        } else if (isScalene(sides)) {
            return "scalene";
        } else if (isIsosceles(sides)) {
            return "isosceles";
        }
    } else {
        return "invalid";
    }



}

function isIsosceles(sides) {
    let counts = sides.reduce((acc, side) => {
        if (acc[side]) {
            acc[side] += 1;
        } else {
            acc[side] = 1;
        }
        return acc;
    }, {});

    let occurences = Object.values(counts);
    if (occurences.includes(1) && occurences.includes(2) && occurences.length === 2) {
        return true;
    } else {
        return false;
    }
}

function isScalene(sides) {
    return sides.every((side, index) => sides.indexOf(side) === index);
}

function isEquilateral(sides) {
    return sides.every(side => side === sides[0]);
}

function isValidTriangle(sides) {
    if (sides.length !== 3) return false;

    if (sides.every(side => typeof side === "number" && side > 0) && shortSidesGreaterThanLong(sides)) {
        return true;
    }
    return false;
}

function shortSidesGreaterThanLong(sides) {
    let sidesCopy = sides.slice();
    sidesCopy.sort((a, b) => a - b);
    return sidesCopy[0] + sidesCopy[1] > sidesCopy[2];
}



//Test Cases:
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle());               // invalid
console.log(triangle(""));             // invalid
console.log(triangle([]));             // invalid
console.log(triangle(1, "", 2));       // invalid