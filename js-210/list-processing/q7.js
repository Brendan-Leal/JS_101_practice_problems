function isPalindrome(str) {
    return str === str.split("").reverse().join("") && str.length > 1;
}

function palindromes(str) {
    let allSubstrings = substrings(str);
    return allSubstrings.filter(str => isPalindrome(str))
}




console.log(palindromes('abcd'));      // []
console.log(palindromes('madam'));     // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


function leadingSubstrings(str) {
    let substrings = [];

    str.split("").forEach((char, index) => {
        substrings.push(str.slice(0, index + 1));
    });

    return substrings;
}

function substrings(str) {
    let allSubstrings = [];

    while (str) {
        allSubstrings.push(leadingSubstrings(str));
        let arrOfChar = str.split("");
        arrOfChar.shift();
        str = arrOfChar.join("");
    }
    let result = [];
    allSubstrings.forEach(substr => result = result.concat(substr));
    return result;
}