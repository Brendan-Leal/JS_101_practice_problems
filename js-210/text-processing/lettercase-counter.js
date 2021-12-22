function letterCaseCount(str) {
    return str.split("").reduce((acc, letter) => {
        if(letter.match(/[a-z]/)) {
            acc.lowercase += 1;
        } else if (letter.match(/[A-Z]/)) {
            acc.uppercase += 1;
        } else {
            acc.neither += 1
        }
        return acc;
    }, {lowercase: 0, uppercase: 0, neither: 0});
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }