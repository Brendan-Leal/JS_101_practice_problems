/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.



INPUT: is 3 ints the angles in a triangle 
OUTPUT: string that is the triangles classification

Explicit Rules:
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Implicit Rules:

Questions:

-----------------------------Examples------------------------------




------------------Data Structures and Algorithm--------------------
Validate input
    determine if there are 3 inputs    
    Determine if all three inputs are numbers
    determine if all 3 inputs are greater than 0;
    Determin if the sum of all three angles equals 180

Determine the classification:
    - If the is exactly 1 90 deg angle then tri is right
    - If all three angles less than 90 return acute
    - if exactly 1 angle is greater than 90 return obtuse

If not a valid triangle return invalid


*/
//---------------------------Code with Intent----------------------
function triangle(...degrees) {

    if (isValidTriangle(degrees)) {
        if (isRightTri(degrees)) {
            return "right";
        } else if (isAcuteTri(degrees)) {
            return "acute";
        } else if (isObtuseTri(degrees)) {
            return "obtuse";
        }
    } else {
        return "invalid";
    }
}

function isObtuseTri(degrees) {
    let obtuseAngles = degrees.filter(deg => deg > 90);
    return obtuseAngles.length === 1;
}

function isAcuteTri(degrees) {
    return degrees.every(deg => deg < 90);

}

function isRightTri(degrees) {
    let rightAngles = degrees.filter(degree => degree === 90);
    return rightAngles.length === 1;
}


function isValidTriangle(degrees) {
    if (degrees.length !== 3) return false;

    if (degrees.every(degree => typeof degree === "number" &&
        degree > 0) &&
        degrees.reduce((acc, curr) => {
            return acc + curr;
        }) === 180) {
        return true;
    } else {
        return false;
    }
}




//Test Cases:
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle());                 // "invalid"
console.log(triangle([]));                 // "invalid"
console.log(triangle(""));                 // "invalid"
console.log(triangle(12));                 // "invalid"
console.log(triangle(12, ""));                 // "invalid"
console.log(triangle("r", 2, -1));                 // "invalid"