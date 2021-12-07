function sum(number) {
  return String(number).split("")
    .reduce((current, next) => Number(current) + Number(next));
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
