function isRealPalindrome(str) {
  let originalStr = str.toLowerCase();
  originalStr = originalStr.replace(/\W/g, "");

  let comparedStr = str.split('').reverse().join('').toLowerCase();
  comparedStr = comparedStr.replace(/\W/g, "");

  console.log(originalStr === comparedStr);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
