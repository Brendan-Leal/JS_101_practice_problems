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


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]