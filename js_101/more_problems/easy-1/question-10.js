function multisum(number) {
  let sum = 0;

  for (let i = number; i >= 1; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    } else {
      continue;
    }
  }

  console.log(sum);
  return sum;
}

multisum(20);
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);
