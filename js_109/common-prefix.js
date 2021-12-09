/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: Write a function to find the longest common prefix string
amongst an array of strings. If there is no common prefix, return an empty
string.

WRITE THE PROBLEM IN YOUR OWN WORDS:
-

EXPECTED INPUT: An array of strings

EXPECTED OUTPUT: string (common prefix)

RULES:
  EXPLICIT
    - find the longest common prefix
    - If no common prefix found return empty string
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

EXAMPLE 1:
"good", "gone", "god" => "go"

"god", "gone", "good"
EXAMPLE 2:

------------------Data Structures and Algorithm--------------------
- Sort the array by the word size.
- create an array called common prefix to hold the letters that are common
amongst all words
- Iterate over the first word character by character starting form the beginning
  IF the character at the current index is equal to the character at the same
  index in all the words in the array add that character to the common prefix
  array
- join the array together
- return the result.


Given an array of words, index value, and a letter check each word in the array
and see if that given index value is equal to the letter. If true then return
the letter
-
-
-
-
-
*/
//---------------------------Code----------------------------------
function commonPrefix(array) {
  array.sort((a, b) => a.length - b.length);
  let commonPrefix = [];
  let firstWord = array.shift();

  // console.log(array)
  for (let firstWrdIdx = 0; firstWrdIdx < firstWord.length; firstWrdIdx++) {
    let allValuesSame = array.every((word) => {
      return word.indexOf(firstWord[firstWrdIdx]) === firstWrdIdx;
    });

    if (allValuesSame) {
      commonPrefix.push(firstWord[firstWrdIdx]);
    }

  }
  commonPrefix = commonPrefix.join("");
  return commonPrefix;

}

// TEST CASES:
console.log(commonPrefix(["flower", "flow", "flight"])); // fl
console.log(commonPrefix(["dog", "racecar", "car"])); // ""
console.log(commonPrefix(["banana", "band", "bandana", "banner"])); // ban
