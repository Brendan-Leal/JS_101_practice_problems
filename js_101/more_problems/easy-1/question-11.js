function asciiValue(str) {
  let asciiStringValue = 0;

  for (let i = 0; i < str.length; i++) {
    asciiStringValue += str.charCodeAt(i);
  }
  console.log(asciiStringValue);
  return asciiStringValue;
}




asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');
