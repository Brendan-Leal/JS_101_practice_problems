/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given a string calculate what percent of that string lowercase, uppercase,
and/or neither.

EXPECTED INPUT: String

EXPECTED OUTPUT: Object

RULES:
  EXPLICIT
    - assume that the string will always contain at least one character.
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
-
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1: 'abCdef 123'
OUTPUT: { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
1. split the string into an array of characters
2. save the total lenght of the string in a variable
3. filter out lowercase character save them in a variable
4. filter out the upper case characters save them in a variable
5. save the remaining character in a variable.
6. divide the number of lowercase characters by the total lenght of the String
this is the percent of lowercase characters
7. divide the number of uppercase characters by the total lenght of the String
this is the percent of uppercase characters
8. divide the number of other characters by the total lenght of the string
this is the percen of the other characters
9. convert all decimal values to percentages
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
function letterPercentages(str) {
  let lettercasePercentages = {lowercase: 0, uppercase: 0, neither: 0};
  let stringLength = str.length;
  let charArray = str.split("");
  let numberOfLowercaseChar = 0;
  let numberOfUppercaseChar = 0;
  let numberOfOtherChar = 0;
  charArray.forEach((char) => {
    if (char >= "a" && char <= "z") {
      numberOfLowercaseChar += 1;
    } else if (char >= "A" && char <= "Z") {
      numberOfUppercaseChar += 1;
    } else {
      numberOfOtherChar += 1;
    }
  });
  lettercasePercentages.lowercase = convertToPercent(numberOfLowercaseChar, str);
  lettercasePercentages.uppercase = convertToPercent(numberOfUppercaseChar, str);
  lettercasePercentages.neither = convertToPercent(numberOfOtherChar, str);
  console.log(lettercasePercentages);
  return lettercasePercentages;
}


function convertToPercent(numberOfChar, str) {
  return String(((numberOfChar / str.length) * 100).toFixed(2));
}

// TEST CASES:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
