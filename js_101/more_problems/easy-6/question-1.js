function repeater(str) {
  let charArray = str.split("");
  let doubles =  charArray.map(char => char + char);

  return doubles.join("");
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             //
