function wordCap(str) {
    let titleCased = str.split(" ").map(word => word.replace(/^./, word[0].toUpperCase()));
    return titleCased.join(" ")
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
console.log(wordCap("1 This is a test"));