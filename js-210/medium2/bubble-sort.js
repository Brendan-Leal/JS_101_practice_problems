/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
write a function that sorts an array using the bubble sort algorithm.
A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.
We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

INPUT: an array of numbers 
OUTPUT:the same array sorted 

Explicit Rules:
input arr contains at least 2 elem
mutate the original array

Implicit Rules:

Questions:

-----------------------------Examples------------------------------




------------------Data Structures and Algorithm--------------------





*/
//---------------------------Code with Intent----------------------
function bubbleSort(array) {
    let currentIndex = 0;
    let nextIndex = 1;
    let lastIndex = array.length - 1;
    let noSwaps = false;

    while (!noSwaps) {
        noSwaps = true;
        let passedThroughArray = false;
        do {
            let currentValue = array[currentIndex];
            let nextValue = array[nextIndex];
            if (currentValue > nextValue) {
                let nextVal = nextValue;
                array[nextIndex] = array[currentIndex];
                array[currentIndex] = nextVal;
                noSwaps = false;
            }
            nextIndex += 1;
            currentIndex += 1;

            if (nextIndex > lastIndex) {
                currentIndex = 0;
                nextIndex = 1;
                passedThroughArray = true;
            }
        } while (!passedThroughArray);
    }
}

//Test Cases:
// const array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

// const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]