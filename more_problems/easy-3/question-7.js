/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Create a functon that multiplies it's argument by 2 unless it's a number that
satisfies the critertia of being a double number then just retrun the number
- A double number is a number whose left side digits are the same as the right
side digits.

EXPECTED INPUT: Int

EXPECTED OUTPUT: Int

RULES:
  EXPLICIT
    - Function takes one argument.
    - Multiply by 2 if not a double number
    -
  IMPLICIT (What's not stated in the problem?)
  - double numbers have a length that is an even number.
  -
  -

QUESTIONS:
-
-
-

MENTAL MODEL:
-
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1: 37
OUTPUT: 74


EXAMPLE 2: 3333
OUTPUT: 3333


---------------------------Data Structures and Algorithm------------------------
      test if the numebr is a double number
1. convert the number into a string
2. split the string into an array of characters.
3. Test if the array can divide in half evenly
  - if so split the array in half
  - join the characters of the left and right side of the array into on string
  - test one string is equal to the other.
    - if so it is a dobule number.
4.
5.
6.
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
function twice(number) {

  let isDoubleNumb = checkIfDoubleNumb(number);
  // console.log(isDoubleNumb);
  if (isDoubleNumb) {
    // console.log(number);
    return number;
  } else {
    // console.log(number * 2);
    return number * 2;
  }
}

// Helper function
function checkIfDoubleNumb(numb) {
  let array = String(numb).split("");
  let firstHalf = "";
  let secondHalf = "";

  if (array.length % 2 === 0) {
    let halfWay = (array.length / 2);

    for (let i = 0; i < halfWay; i++) {
      firstHalf += array.shift();
    }
    secondHalf = array.join("");
  } else {
    return false;
  }
  return firstHalf === secondHalf;
}


// TEST CASES:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(763465763465);        // 7676
