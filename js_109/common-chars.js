/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: Given an array of strings made only from lowercase letters,
return an array of all characters that show up in all strings within the given
array (including duplicates). For example if a character occures 3 times in all
strings but not 4 times, you need to include that character three times in the
final answer

WRITE THE PROBLEM IN YOUR OWN WORDS:
-

EXPECTED INPUT:

EXPECTED OUTPUT:

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

EXAMPLE 1:
"brendan", "nana", "banana" => "n", "a", "n"
EXAMPLE 2:
["bella", "label", "roller"] =>  ["e", "l", "l"]

------------------Data Structures and Algorithm--------------------
Create a function that returns true if a character present in all elements in an
array
- If the character is in every word of the array return true otherwise false.

If the character can be found in the each of the words in the array then delete
the first occurence of the char in each word.
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
-
*/
//---------------------------Code----------------------------------
function commonChars(array) {
  let firstWord = array[0];
  let arrayClone = array.slice(1);
  let savedChars = [];

  for (let charIdx = 0; charIdx < firstWord.length; charIdx++) {
    let currentChar = firstWord[charIdx];
    if (charFoundInAllWords(currentChar, arrayClone)) {
      savedChars.push(currentChar);
      updateArrayClone(arrayClone, currentChar);
    }
  }
  return savedChars;
}

function updateArrayClone(arrayClone, currentChar) {
  for (let arrIdx = 0; arrIdx < arrayClone.length; arrIdx++) {
    let indexToDelete = arrayClone[arrIdx].indexOf(currentChar);

    arrayClone[arrIdx] = setNewString(arrayClone[arrIdx], indexToDelete);
  }
}

function setNewString(word, indexToDelete) {
  let newWord = word.split("");
  newWord.splice(indexToDelete, 1);
  return newWord.join("");
}

function charFoundInAllWords(char, array) {
  return array.every(word => word.includes(char));
}

// TEST CASES:
// console.log(commonChars(["a", "b"])); // []
// console.log(commonChars(["ab", "bc"])); // ["b"]
// console.log(commonChars(["bella", "label", "roller"])); // ["e", "l", "l"]
// console.log(commonChars(["cool", "lock", "cook"])); // ["c", "o"]
// console.log(commonChars(["hello", "goodbye", "booya", "random"])); // ["o"]
// console.log(commonChars(["aabbaaaa", "ccdddddd", "eeffee", "ggrrrrr", "yyyzzz"]));
console.log(commonChars(["brendan", "nana", "banana"]));
