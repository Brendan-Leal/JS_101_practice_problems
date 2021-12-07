/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: A collection of spelling blocks has two letters per block,
as shown in this list:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do
not use both letters from any given block. You can also only use each block
once.
Write a function that takes a word string as an argument, and returns true if
the word can be spelled using the set of blocks, or false otherwise. You can
consider the letters to be case-insensitive when you apply the rules.


WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given the block of words can the given string be made with the following
rules?
You can only use each block once
You cannot have a word that uses both letters from a single block.
letters are case insensitive

EXPECTED INPUT: String

EXPECTED OUTPUT: True or false

RULES:
  EXPLICIT
    - You can only use each block once
    - You cannot have a word that uses both letters from a single block.
    - letters are case insensitive
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

EXAMPLE 1:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

------------------Data Structures and Algorithm--------------------
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
-
*/
//---------------------------Code----------------------------------
function isBlockWord(string) {
  let letterBlocks = [
    "BObo", "XKxk", "DQdq", "CPcp", "NAna", "GTgt", "REre",
    "FSfs", "JWjw", "HUhu", "VIvi", "LYly", "ZMzm"
  ];

  let lettersArray = string.split("");

  for (let index = 0; index < lettersArray.length; index++) {
    let searchTerm = lettersArray[index];
    if (!isBlockFound(letterBlocks, searchTerm)) {
      return false;
    } else {
      removeBlock(letterBlocks, searchTerm);
    }
  }
  return true;

}

function removeBlock(letterBlocks, searchTerm) {
  let indexOfDeletion;

  for (let i = 0; i < letterBlocks.length; i++) {
    let block = letterBlocks[i];
    if (block.includes(searchTerm)) {
      indexOfDeletion = i;
    }
  }
  letterBlocks.splice(indexOfDeletion,1);
}


function isBlockFound(letterBlocks, searchLetter) {
  let isFound = false;

  letterBlocks.forEach((block) => {
    if (block.includes(searchLetter)) {
      isFound = true;
    }
  });
  return isFound;
}

// TEST CASES:
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
