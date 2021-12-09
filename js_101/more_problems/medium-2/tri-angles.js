function triangle(angle1, angle2, angle3) {
  if (isTriangleValid(angle1, angle2, angle3)) {
    displayTriangleType(angle1, angle2, angle3);
  } else {
    console.log("invalid");
  }
}

function displayTriangleType(angle1, angle2, angle3) {
  if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    console.log("right");
  } else if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    console.log("acute");
  } else {
    console.log("obtuse");
  }
}

function isTriangleValid(angle1, angle2, angle3) {
  const VALID_ANGLE_SUM = 180;

  if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    return false;
  } else {
    return VALID_ANGLE_SUM === angle1 + angle2 + angle3;
  }
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
