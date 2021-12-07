function afterMidnight(strTime) {
  let hours = +strTime.split(":")[0];
  let minutes = +strTime.split(":")[1];

  if (hours === 24) return 0;

  let totalMinutes = (hours * 60) + minutes;

  return totalMinutes;
}
function beforeMidnight(strTime) {
  let hours = +strTime.split(":")[0];
  let minutes = +strTime.split(":")[1];

  if (hours === 24) return 0;

  let totalMinutes = (hours * 60) - minutes;

  return totalMinutes;
}



console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
