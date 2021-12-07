function reverseWords(str) {
  let newStr = str.split(" ").map(word => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  });

  return newStr.join(" ");
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
