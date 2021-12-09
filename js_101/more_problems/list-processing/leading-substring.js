/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Take a string an create an array of strings containing each character
sequentially adding the next character each time.

EXPECTED INPUT: string

EXPECTED OUTPUT: array of strings

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
-
-
----------------------------Examples/ Test Cases--------------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE 1:
OUTPUT:


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
1. Designate a list to hold the final result.
2. split the word into individual characters
3. take the first character and add it to the final results list
4. take the first and second character combine the second character to the end
of the first character and add that to the final result list
5. Continue untill there are no more characters to add
6.
7.
8.
9.
10.

--------------------------------------------------------------------------------
1. Designate a list to hold the final result.
2. add the whole word to the final result
3. While the total length of the word is not 1
  - take off the last character of the word and add the remaining word to the
  final list.
4. Sort the list alphabeticaly.
5.
6.
7.
8.
9.
10.
*/
//-----------------------------------Code---------------------------------------
function leadingSubstrings(str) {
  let currentSubstring = "";
  let allCharCombos = str.split("").map(char => {
    currentSubstring += char;
    return currentSubstring;
  });
console.log(allCharCombos);
}
// TEST CASES:
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
