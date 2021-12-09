/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: Given a non empty string check if it can be constructed by
taking a substring of it and appending multiple copies of the substring
together. You may assume the given string consists of lowercase english letters
only

WRITE THE PROBLEM IN YOUR OWN WORDS:
-

EXPECTED INPUT:

EXPECTED OUTPUT:

RULES:
  EXPLICIT
    - Given a non empty string
    - take a substring and append it multiple times to itself to make the string
    again
    - lowercase english letters only
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

EXAMPLE 1:
"abab" => true

"ab" + "ab" = "abab"
EXAMPLE 2:
"aba" => false
"a" + "a" + ... != "aba"

Example 3:
"jkkjjkkj"
"jkkj" + "jkkj" = "jkkjjkkj"

------------------Data Structures and Algorithm--------------------
- Create an array of all possable substings
- iterate over each possable substings
    append the substing to itself check if it is equal to the string
    stop append if the new string length is greater than the string length
- If it is equal return true otherwise false.
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
function repeatedSubstringPattern(string) {
  let substrArray = leadingSubstrings(string);

  for (let index = 0; index < substrArray.length - 1; index++) {
    let newString = "";

    while (newString.length < string.length) {
      newString += substrArray[index];
    }

    if (newString === string) {
      return true;
    }
  }
  return false;
}

function leadingSubstrings(string) {
  let substring = [];

  for (let length = 1; length <= string.length; length++) {
    substring.push(string.slice(0, length));
  }
  return substring;
}

// TEST CASES:
// console.log(repeatedSubstringPattern("abab")); // true
// console.log(repeatedSubstringPattern("aba")); // false
// console.log(repeatedSubstringPattern("aabaaba")); // false
// console.log(repeatedSubstringPattern("abaababaab")); // true
// console.log(repeatedSubstringPattern("abcabcabcabc")); // true
console.log(repeatedSubstringPattern("accccccccca"));
