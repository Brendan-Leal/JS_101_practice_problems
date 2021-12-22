/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is 
supplied as an argument to the function. The smallest such star you need to handle is a 
7x7 grid (i.e., when n is 7).


INPUT: single int
OUTPUT: 

Explicit Rules:
- Center line is n stars in length with no spaces leading or inbetween stars
- Smallest star is when n = 7

- If n is < 7 return null
- If n is not an int return null


Implicit Rules:
there are 3 lines above the center line when n is 7
there are 4 lines above the center line when n is the next largest odd number 9
This pattern increases the number of lines above center


Questions:
How to handle n < 7

-----------------------------Examples------------------------------
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *


star(9);
9 - 3 = 6 / 2 = 3

// logs
*   *   *
 *  *  *
  * * *
   ***   
*********
   ***
  * * *
 *  *  *
*   *   *



    ***    
***********

n = 11 there should be 5 lines above center 

How many odd numbs from 7 to 11 including 11?
2 + 3 = 5

11 - 3 = 8 / 2 = 4





------------------Data Structures and Algorithm--------------------
- validate the input
    - If n is < 7 return null
    - If n is not an int return null

Create an array to store each line of the star
- Create the center line store it in the array

- determin how many lines need to be made above the center line
    - We know the minimum number of lines is 3 based on n = 7
    - detemine how many odd numbers from 7 upto and including n. Add that sum to the base number of stars 3.
    - this creates a known number of lines above center line

- Generate a string of stars for every known number of lines above center
    - every string of stars is 3 stars in length
    ["*******", "***", "***", "***"] GOAL if n = 7

- Iterate over each line of stars 
    - skip the 1st and second lines
    - the next line gets 1 space inbetween each star
    - the line after that get 2 space incetweeen each star
    - continue this pattern untill you reach the last line
    ["*******", "***", "* * *", "*  *  *"] GOAL if n = 7




- Iterate over each line of stars 
    - skip the 1st line
    - to start the 2nd line gets (n - 3) / 2 number of spaces infront of the current value. This generate the starting value for number of spaces
    - Then for each subsequent line decrease this starting value by 1
    - preappend that number of spaces for the current line.
    ["*******", "  ***", " * * *", "*  *  *"] GOAL if n = 7

- Make sure it's a copy and Slice the current array from index 1 to the end of the array 
- reverse it 
- merge this array with the bottom half of the shape

- print each line






*/
//---------------------------Code with Intent----------------------
function stars(n) {
    const STAR = "*";
    if (n < 7 || !Number.isInteger(n)) return null;
    let bottomHalfStar = [STAR.repeat(n)];
    let totalLinesAboveCenter = 3;
    let count = 7;

    while (count <= n) {
        count += 1;
        if (count % 2 !== 0) {
            totalLinesAboveCenter += 1;
        }
    }

    for (let i = 0; i < totalLinesAboveCenter; i += 1) {
        bottomHalfStar.push(STAR.repeat(3));
    }

    let numberOfSpaces = 0;
    bottomHalfStar = bottomHalfStar.map((line, index) => {
        if (index >= 2) {
            numberOfSpaces += 1;
            return insertSpacesBetweenStars(line, numberOfSpaces);
        } else {
            return line;
        }
    });

    let numberOfLeadingSpaces = (n - 3) / 2;
    bottomHalfStar = bottomHalfStar.map((line, index) => {
        if (index > 0) {
            let totalLen = line.length + numberOfLeadingSpaces;
            numberOfLeadingSpaces -= 1;
            return line.padStart(totalLen, " ");
        } else {
            return line;
        }
    });

    let fullStar = bottomHalfStar.slice(1).reverse();
    fullStar = fullStar.concat(bottomHalfStar);
    fullStar.forEach(line => {
        console.log(line);
    });

}

function insertSpacesBetweenStars(line, numberOfSpaces) {
    let space = " ".repeat(numberOfSpaces);
    let starArr = line.split("");
    starArr.splice(1, 0, space);
    starArr.splice(3, 0, space);
    return starArr.join("");
}


//Test Cases:
// stars(7);
// console.log("\n\n");
// stars(9);

stars(25)

console.log(stars([]));
console.log(stars());
console.log(stars(""));
console.log(stars(1.2));
console.log(stars({}));