/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: Write a function that returns true if a portion of str1
characters can be rearranged to match str2, otherwise return false.

WRITE THE PROBLEM IN YOUR OWN WORDS:
- Given 2 strings find if the second string contains the first string.

EXPECTED INPUT: 2 strings

EXPECTED OUTPUT: true or false.

RULES:
  EXPLICIT
    - Only lowerCase letters will be used
    - No punctuations, or digits
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
srt1 is "rkqodlw"
str2 is "world"
OUTPUT: true

EXAMPLE 2:
srt1 is "katas"
str2 is "steak"
OUTPUT: false

------------------Data Structures and Algorithm--------------------
- Convert the 2 input strings into arrays
- For each character in the searchTermArray find if it is in the stringArray
  If it is then remove that element form the stringArray.
- If the removed elements joined into a string is equal to the searchTerm
return true otherwise false.
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
function scramble(string, searchTerm) {
  let stringArray = string.split("");
  let searchTermArray = searchTerm.split("");
  let foundCharacters = "";

  searchTermArray.forEach(char => {
    if (stringArray.includes(char)) {
      foundCharacters += removeCharFrom(stringArray, char);
    }
  });
  console.log(foundCharacters === searchTerm);
  return foundCharacters === searchTerm;
}

function removeCharFrom(stringArray, char) {
  let removeIndex = stringArray.findIndex(elem => elem === char);
  return stringArray.splice(removeIndex, 1);
}

// TEST CASES:
scramble("javaass", "jjss"); // false
scramble("rkqodlw", "world"); // true
scramble("cedewaraaossoqqyt", "codewars"); // true
scramble("katas", "steak"); // false
scramble("scriptjava", "javascript"); // true
scramble("scriptingjava", "javascript"); // true
