/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- given 2 arrays distribute each value to the other and calculate the product..
sort the output in accending numberical order.

EXPECTED INPUT: 2 arrays

EXPECTED OUTPUT: 1 array

RULES:
  EXPLICIT
    -
    -
    -
  IMPLICIT (What's not stated in the problem?)
  -
  -
  -

QUESTIONS:
-
-
-

MENTAL MODEL:
- Distrabution in algebra
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1:
OUTPUT:


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
1. given 2 lists of numbers
2. take the first number of the 1st list and multiply it by the first number in
the 2nd list.
3. take the second number in the 1st list and multiply it by the second number
in the 2nd list
4. So on a so forth untill there are no more values to multiply
5. take each computed product and input them in their own seprate list.
6. sort that list accending numbericaly.
7.
8.
9.
10.

--------------------------------------------------------------------------------
1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
*/
//-----------------------------------Code---------------------------------------


function multiplyAllPairs(array1, array2) {
  let products = [];

  array1.forEach((firstNumb) => {
    array2.forEach((secondNumb) => {
      products.push(firstNumb * secondNumb);
    });

  });

  console.log(products.sort((a, b) => Number(a) - Number(b)));
  return products.sort((a, b) => Number(a) - Number(b));
}


// TEST CASES:
multiplyAllPairs([2, 4], [4, 3, 1, 2]);
