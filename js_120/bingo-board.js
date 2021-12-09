let board = {
  init() {
    this.columns = this.setColumnNumbers();

    this.line1 = "|   B  |   I  |   N  |   G  |   O  |";
    this.line2 = `|  ${this.columns.b[0]}  |  ${this.columns.i[0]}  |  ${this.columns.n[0]}  |  ${this.columns.g[0]}  |  ${this.columns.o[0]}  |`;

    this.line3 = `|  ${this.columns.b[1]}  |  ${this.columns.i[1]}  |  ${this.columns.n[1]}  |  ${this.columns.g[1]}  |  ${this.columns.o[1]}  |`;

    this.line4 = `|  ${this.columns.b[2]}  |  ${this.columns.i[2]}  | ${this.columns.n[2]} |  ${this.columns.g[2]}  |  ${this.columns.o[2]}  |`;

    this.line5 = `|  ${this.columns.b[3]}  |  ${this.columns.i[3]}  |  ${this.columns.n[3]}  |  ${this.columns.g[3]}  |  ${this.columns.o[3]}  |`;

    this.line6 = `|  ${this.columns.b[4]}  |  ${this.columns.i[4]}  |  ${this.columns.n[4]}  |  ${this.columns.g[4]}  |  ${this.columns.o[4]}  |`;

    this.horizontalLine = "------------------------------------";
    this.blankLine = "|      |      |      |      |      |";

    return this;
  },

  display() {
    console.log(this.horizontalLine);
    console.log(this.blankLine);
    console.log(this.line1);
    console.log(this.blankLine);
    console.log(this.horizontalLine);
    console.log(this.blankLine);
    console.log(this.line2);
    console.log(this.blankLine);
    console.log(this.horizontalLine);
    console.log(this.blankLine);
    console.log(this.line3);
    console.log(this.blankLine);
    console.log(this.horizontalLine);
    console.log(this.blankLine);
    console.log(this.line4);
    console.log(this.blankLine);
    console.log(this.horizontalLine);
    console.log(this.blankLine);
    console.log(this.line5);
    console.log(this.blankLine);
    console.log(this.horizontalLine);
    console.log(this.blankLine);
    console.log(this.line6);
    console.log(this.blankLine);
    console.log(this.horizontalLine);
  },

  setColumnNumbers() {
    let columnNumbers = {
      b: [],
      i: [],
      n: [],
      g: [],
      o: [],
    };

    let numbers = this.randomNumbers();

    for (const column in columnNumbers) {
      switch (column) {
        case "n":
          for (let i = 0; i < 4; i++) {
            let value = String(numbers.pop());

            if (value.length < 2) {
              value = " " + value;
            }
            columnNumbers[column][i] = value;
          }

          columnNumbers[column].splice(2, 0, "FREE");
          break;

        default:
          for (let i = 0; i < 5; i++) {
            let value = String(numbers.pop());

            if (value.length < 2) {
              value = " " + value;
            }

            columnNumbers[column][i] = value;
          }
          break;
      }
    }
    return columnNumbers;
  },

  randomNumbers() {
    let numbers = [];

    for (let i = 0; i < 24; i++) {
      let num = Math.floor(Math.random() * 100);

      while (numbers.includes(num)) {
        num = Math.floor(Math.random() * 100);
      }
      numbers.push(num);
    }
    return numbers;
  },
};

let bingoBoard = Object.create(board).init();
bingoBoard.display();
