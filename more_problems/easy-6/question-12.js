function isBalanced(str) {
  let parenthesesCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      parenthesesCount += 1;
    } else if (str[i] === ")") {
      parenthesesCount -= 1;
    }
    if (parenthesesCount < 0) return false;
  }
  return parenthesesCount === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
