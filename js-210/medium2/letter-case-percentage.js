/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

INPUT: A string of at least one char
OUTPUT: object that has 3 props lowercase uppercase neither each corospond to the percentage of chars in the input string that fall in that catigory

Explicit Rules:
You may assume that the string will always contain at least one character.

Implicit Rules:
spaces count as neither cat

Questions:

-----------------------------Examples------------------------------
abCdef 123

l: 5 / 10 = .5
u: 1 / 10 = .10
n: 4 / 10 = .4







------------------Data Structures and Algorithm--------------------
{
    lowercase: 0,
    uppercase: 0,
    neither: 0
}


iterate through each char in the string
    - If the current char is lowercase
        increment the value in the object that is lowercase
    - If the current char is uppercase
        increment the value in the object that is uppercase
    - otherwise the char is neither
        increment the value in the object that is neither

Calc the percentages
    - Get the total length of the string
    - iterate over the object
        - for each value in the object 
        vale / total length of the string times 100 make sure the value is rounded to 2 decimal
        places 
return the obj
*/
//---------------------------Code with Intent----------------------
function letterPercentages(str) {
    let percentages = {
        lowercase: 0,
        uppercase: 0,
        neither: 0
    };

    for (let i = 0; i < str.length; i += 1) {
        let currentChar = str[i];

        if (currentChar.match(/[a-z]/)) {
            percentages.lowercase += 1;
        } else if (currentChar.match(/[A-Z]/g)) {
            percentages.uppercase += 1;
        } else {
            percentages.neither += 1;
        }
    }
    
    let totalStrLength = str.length;
    for (const letterCase in percentages) {
        let value = percentages[letterCase];
        let percent = (value / totalStrLength) * 100;
        percentages[letterCase] = percent.toFixed(2);
    }
    return percentages
}
//Test Cases:
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }