/*
----------------------Understand the Problem-----------------------
PROBLEM STATEMENT:
Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

INPUT: A year which is an int greater than 1752
OUTPUT: the number of friday the 13th in that year

Explicit Rules:

Implicit Rules:
0-6 sunday - sat
Friday is 5

Questions:

-----------------------------Examples------------------------------




------------------Data Structures and Algorithm--------------------
Generate a date object from the year
"1-13-year"

Generate an array of date object that return a day of 5
Start at 1-13
check if the day is 5
    if so collect the date
    Otherwise iterate the month all the way to 12

return the length of the collection of date objects



*/
//---------------------------Code with Intent----------------------
function fridayThe13ths(year) {
    let unluckyDays = [];
    let month = 1;

    while (month < 13) {
        let date = new Date(`${month}-13-${year}`);
        if(date.getDay() === 5) {
            unluckyDays.push(date);
        }
        month += 1;
    }
    return unluckyDays.length;    
}
//Test Cases:
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2020));