class Rectangle {
  constructor(width, len) {
    this.width = width;
    this.len = len;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.len;
  }

  getArea() {
    return this.len * this.width;
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

// ============================================================
// Psuedo classical

function Rectangle2(width, len) {
  this.width = width;
  this.len = len;
}
Rectangle2.prototype.getWidth = function() {
  return this.width;
}

Rectangle2.prototype.getLength = function () {
  return this.len;
}

Rectangle2.prototype.getArea = function() {
  return this.len * this.width;
}

let rec2 = new Rectangle2(10, 8);
console.log(rec2.getArea());

// OLOO
let Rectangel3 = {
  init(len, width) {
    this.len = len;
    this.width = width;
    return this;
  },

  getWidth() {
    return this.width;
  },

  getLength() {
    return this.len;
  },

  getArea() {
    return this.len * this.width;
  },
}

let rec3 = Object.create(Rectangel3).init(6,9);
console.log(rec3.getArea());