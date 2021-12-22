function leadingSubstrings(str) {
    let substrings = [];

    str.split("").forEach((char, index) => {
        substrings.push(str.slice(0, index + 1));
    });

    return substrings;
}

console.log(leadingSubstrings('abc'));     // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));      // ["a"]
console.log(leadingSubstrings('xyzzy'));   // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// push original str to new arr
// split str into arr of char, pop, join
// push value to ne array