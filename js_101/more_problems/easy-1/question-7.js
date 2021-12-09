/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- With 2 strings as input create a function that concatenats the shorter string
to the longer string followd by the shorter string again.

EXPECTED INPUT: 2 strings

EXPECTED OUTPUT: A single string.

RULES:
  EXPLICIT
    - Determin which string is longer.
    - Strings will be of diffrent lengths
    -
  IMPLICIT (What's not stated in the problem?)
  - An empty string for an argument returns the single remaining string.
  -
  -

QUESTIONS:
- What if both arguments are empty?
-
-

MENTAL MODEL:
-
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1: "aaa", "zzzzz"
OUTPUT: "aaazzzzzaaa"


EXAMPLE 2: "", xyz
OUTPUT: "xyz"

---------------------------Data Structures and Algorithm------------------------
1. Given 2 strings compare their lengths
2. Create a variable to store the resulting string after any augmentations
3. concatenate the longer srting to the end of the shorter string saving it
4. concatenate the shorter string to the end of the saved string.
5. return the resulting string
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
function shortLongShort(str1, str2) {
  let longString;
  let shortString;

  if (str1.length > str2.length) {
    longString = str1;
    shortString = str2;
  } else if (str1.length < str2.length) {
    longString = str2;
    shortString = str1;
  }

  console.log(shortString + longString + shortString);
  return shortString + longString + shortString;
}


// TEST CASES:
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort("abcde", "fgh");    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
