function getGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;

  if (average <= 100 && 90 <= average) {
    return "A"
  } else if (average < 90 && 80 <= average) {
    return "B"
  } else if (average < 80 && 70 <= average) {
    return "C"
  } else if (average < 70 && 60 <= average) {
    return "D"
  } else {
    return "F"
  }
}

// TEST CASES:
getGrade(95, 90, 93);    // "A"
getGrade(85, 76, 82) // B
getGrade(75,78,79) // C
getGrade(50, 50, 95); // "D"
getGrade(0, 10, 6); // F
