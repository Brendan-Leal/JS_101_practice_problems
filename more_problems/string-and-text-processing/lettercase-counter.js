function letterCaseCount(str) {
  let strAttributes = {lowercase: 0, uppercase:0, other: 0};

  str.split("").forEach((char) => {
    if (char >= "a" && char <= "z") {
      strAttributes.lowercase += 1;

    } else if (char >= "A" && char <= "Z") {
      strAttributes.uppercase += 1;

    } else {
      strAttributes.other += 1;
    }
  });

  console.log(strAttributes);
  return strAttributes;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
