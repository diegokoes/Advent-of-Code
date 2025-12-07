const fs = require("fs");

const filePath = "/home/koes/programming/Advent-of-Code/2025/day_01/puzzle_input.txt";
const filePathTest = "/home/koes/programming/Advent-of-Code/2025/day_01/test_file.txt";
const lines = fs.readFileSync(filePath, "utf-8").trim().split("\n");

let pos = 50;
const CEILING = 100;
const FLOOR = 0;
let numberOfZeros = 0;
lines.forEach((line) => {
  let number = Number(line.substring(1));
  console.log("line: " + line);
  if (line.startsWith("L")) {
    let gapLeft;
    pos === 0 ? (gapLeft = 100) : (gapLeft = FLOOR + pos);
    const newPos = pos - number;
    pos = ((newPos % 100) + 100) % 100;
    if (number >= gapLeft) {
      let remaining = number - gapLeft;
      numberOfZeros += 1 + Math.floor(remaining / 100);
    }
  }
  if (line.startsWith("R")) {
    let gapRight;
    pos === 0 ? (gapRight = 100) : (gapRight = CEILING - pos);
    const newPos = pos + number;
    pos = (newPos % 100) % 100;
    if (number >= gapRight) {
      let remaining = number - gapRight;
      numberOfZeros += 1 + Math.floor(remaining / 100);
    }
  }
  //pos === 0 ? numberOfZeros++ : "";
  console.log("Position: " + pos);
  console.log("Number of zeros: " + numberOfZeros);
});
