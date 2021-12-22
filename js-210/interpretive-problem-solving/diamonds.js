/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:

Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer 
supplied as an argument to the function. You may assume that the argument will always be an odd 
integer.

INPUT: An odd int
OUTPUT: string of * in the shape of a diamond

Explicit Rules:


Implicit Rules:

Questions:

-----------------------------Examples------------------------------

5
  *
 ***   
*****

  *
 ***
 
 
 
 ["  *", " ***", "*****", " ***", "  *"]



------------------Data Structures and Algorithm--------------------
The center line of the diamond is a * repeated input number of times
Create an array where the first element is the center line 
the next element is (n - 2) stars in length 
continue until you have 1 star

calculate the number of spaces infront of each element:
iterate over the array of stars
the first element gets 0 spaces infront 
the second element get 1 space infront 
...
stop at the last element.

This array is the bottom half of the diamond

make a copy of the array do not include the 0th element
reverse this copy 
concat the first array to the end of the second array
print each element in the array consecutivly each on a new line.




*/
//---------------------------Code with Intent----------------------
function diamond(size) {
    let rows = [];

    for (let starSize = size; starSize > 0; starSize -= 2) {
        rows.push("*".repeat(starSize));
    }

    rows = rows.map((row, index) => {
        if (index === 0) {
            return row;
        } else {
            return " ".repeat(index) + row;
        }
    });

    let fullDiamond = rows.slice(1);
    fullDiamond.reverse();
    fullDiamond = fullDiamond.concat(rows);
    fullDiamond.forEach(row => console.log(row));
}


//Test Cases:
diamond(1);
diamond(3);
diamond(9);
