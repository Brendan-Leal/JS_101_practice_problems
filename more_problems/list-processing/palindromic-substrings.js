/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

--------------------------Understand the Problem--------------------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Create a list of all palindromic words found in a word. Sort this list by the
order of their appearance in the string.

EXPECTED INPUT: String

EXPECTED OUTPUT: Array

RULES:
  EXPLICIT
    - Duplicate substrings should be included multiple times.
    - Case sensitive. dog !== Dog
    - single characters are not palindromes.

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

EXAMPLE 1: "madam"
OUTPUT: [ "madam", "ada" ]


EXAMPLE 2:
OUTPUT:


-------------------------Data Structures and Algorithm--------------------------
1. create a list of all possible substrings
2. If the word is longer than 1 character in length
  split the word up by its characters, reverse its order, and join it back
  together. Test if the modified word is equal to the word before modification.
3. If the words are equal then it is a palindrome and should be collected into
its own list.
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
function palindromes(str) {
  let charCombinations = subStrings(str);

  let listOfPalindromes = charCombinations.filter((substr) => {
    return substr === substr.split("").reverse().join("") && substr.length !== 1;
  });

  console.log(listOfPalindromes);
}

function subStrings(string) {
  let substrings = [];

  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }
  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}


// TEST CASES:
// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]

// palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
