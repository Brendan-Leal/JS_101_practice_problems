/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: Given 2 strings, find out if there is a substring that
appears in both strings. You will return true if you find a substring that
appears in both strings otherwise false. We only care about substrings that are
longer than on letter long.

WRITE THE PROBLEM IN YOUR OWN WORDS:
-

EXPECTED INPUT: 2 strings

EXPECTED OUTPUT: bool

RULES:
  EXPLICIT
  - find the substring that appears in both strings return true
  - otherwise return false.
  - substrings are longer than one letter.
  IMPLICIT (What's not stated in the problem?)
  - case insensitive.
  - substring only has to apear once in the string.

QUESTIONS:
-
-
-
-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1:
"Something", "Fun" => false
"Something", "Home" => true b/c Something has "o", "m", "e", "h"
"1234567", "541265" => true
EXAMPLE 2:

------------------Data Structures and Algorithm--------------------
- If every character in the 2nd string can be found somewhere in the 1st
string return true otherwise false.
-
-
-
-
-
-
-
-
-
-
*/
//---------------------------Code----------------------------------
function substringTest(word1, word2) {
  let secondWordArray = word2.toLowerCase().split("");

  if (word1.length > 0 && word2.length > 0) {
    return secondWordArray.every(char => word1.toLowerCase().includes(char));
  } else {
    return false;
  }
}

// TEST CASES:
console.log(substringTest("Something", "Fun")); // false
console.log(substringTest("Something", "Home")); //  true
console.log(substringTest("Something", "")); // false
console.log(substringTest("", "Something")); // false
console.log(substringTest("BANANA", "banana")); // true
console.log(substringTest("test", "lllt")); // false
console.log(substringTest("", "")); // false
console.log(substringTest("1234567", "541265")); // true
