/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
Write a function that takes a sentence string as an argument and returns that string with every 
occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
'eight', 'nine' — converted to its corresponding digit character.

INPUT: string with numbers spelled out 
OUTPUT: the same string but the numbers are in numeric form 

Explicit Rules:
    Replace words that are numbers spelled out with their numerical counterpart

Implicit Rules:
    If the input is not a string return undefined

Questions:

-----------------------------Examples------------------------------




------------------Data Structures and Algorithm--------------------
Validate the input
    -Check if the input is a string
        - If the input is not a string return undefined
    - If the string is an empty string return the empty string

Split the input string by word
create a new array based on Iterating over each word
    - If the word contains any char other than a-z 
    - save the value of the punctuation
    - remove the punctuation

    - look up the corosponding numeric value
        - If found 
            - append the punctuation
            - return this new value 
        - Otherwise 
            * do not overwrite the current value of the word
            - keep the word unchanged

join the new array to gether and return it.
{
    one: "1"
    two: "2"
    .
    .
    .
}



*/
//---------------------------Code with Intent----------------------
function wordToDigit(str) {
    let wordToNum = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
    };

    if (typeof str !== "string") {
        return undefined;
    } else if (str === "") {
        return str;
    }

    let arrOfWords = str.split(" ");

    arrOfWords = arrOfWords.map(word => {
        if (word.match(/\W/)) {
            let punctuation = word.match(/\W/)[0];
            let wordCopy = word;
            wordCopy = wordCopy.replace(punctuation, "");

            if (wordToNum[wordCopy]) {
                return wordToNum[wordCopy] + punctuation;
            } else {
                return word;
            }
        } else if (wordToNum[word]) {
            return wordToNum[word];
        } else {
            return word;
        }
    });
    // console.log(arrOfWords);

    return arrOfWords.join(" ");
}
//Test Cases:
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit(""));
console.log(wordToDigit("Hello world."));
console.log(wordToDigit("Heres my number: 555-123-4201"));
console.log(wordToDigit("Heres my number: five five five - one two three - one one one one!"));

console.log(wordToDigit([]));
console.log(wordToDigit());
console.log(wordToDigit(123));