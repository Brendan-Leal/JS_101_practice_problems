/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT:
Create a function that takes a positive int and returns the next bigger number
formed by the same digits

WRITE THE PROBLEM IN YOUR OWN WORDS:
-

EXPECTED INPUT: number

EXPECTED OUTPUT: number

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
-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLES
12 => 21
513 => 531
2017 => 2071
9 => -1
111 => -1
531 => -1

------------------Data Structures and Algorithm--------------------
- if the number is less than 10 return -1
- if the number has all the same digits return -1
- Sort the digits from biggest to smallest set that as the maxValue.
- if the number is equal to the maxValue return -1
-
Create a function that takes 2 numbers and test if all the digits in one number
can be found in another number.
- Split the number1 and number2 into an array of digits.
- For each digit in number1 search number2 for that digit
  If found then remove that digit
  repeat until the end of number1
-
-
-
*/
//---------------------------Code----------------------------------
function nextBiggerNum(number) {
  const originalNumber = number;
  let maxValue = setMaxValue(number);

  while (number < maxValue) {
    number += 1;
    if (isSameDigits(originalNumber, number)) return number;
  }
  return -1;
}

function isSameDigits(number1, number2) {
  let num1Array = String(number1).split("");
  let num2Array = String(number2).split("");

  num1Array.forEach(digit => {
    if (num2Array.includes(digit)) {
      let removeIndex = num2Array.indexOf(digit);
      num2Array.splice(removeIndex, 1);
    }
  });
  return num2Array.length === 0;
}

function setMaxValue(number) {
  return Number(String(number).split("")
    .sort((a, b) => Number(b) - Number(a))
    .join(""));
}

// TEST CASES:
console.log(nextBiggerNum(9)); // -1
console.log(nextBiggerNum(12)); // 21
console.log(nextBiggerNum(513)); // 531
console.log(nextBiggerNum(2017)); // 2071
console.log(nextBiggerNum(111)); // -1
console.log(nextBiggerNum(531)); // -1
console.log(nextBiggerNum(123456789)); // 123456798
console.log(nextBiggerNum(69420));
