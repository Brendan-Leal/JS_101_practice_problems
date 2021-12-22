/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

INPUT: int 
OUTPUT: number

Explicit Rules:

Implicit Rules:

Questions:

-----------------------------Examples------------------------------

1 2 3 4 5 6 7 8 9 10
1+ 4+ 9+ 16+ 25+ 36+ 49+ 64+ 81+ 100
385


10
15 + 6
21 + 7
28 + 8
36 + 9 
45
55

------------------Data Structures and Algorithm--------------------
Generate the sum of 1+2+3...+n
Square that value

generate the sum of 1^2+2^2...n^2
return the difference


*/
//---------------------------Code with Intent----------------------
function sumSquareDifference(n) {
    let count = 1;
    let firstSum = 0;
    let secondSum = 0;

    while (count <= n) {
        firstSum += count;
        secondSum += Math.pow(count, 2)
        count += 1;
    }

    firstSum = Math.pow(firstSum, 2);
    
    return firstSum - secondSum;
}

//Test Cases:
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150