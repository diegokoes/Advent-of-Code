const fs = require("fs");
const path = require("path");

const filePath = "/home/koes/programming/Advent-of-Code/2025/day_01/puzzle_input.txt";
const lines = fs.readFileSync(filePath, "utf-8").trim().split("\n");

console.log(lines);
let pos = 50;
const CEILING = 99;
const FLOOR = 0;
let numberOfZeros = 0;
lines.forEach((line) => {
  number = Number(line.substring(1));
  if (line.startsWith("L")) {
    const newPos = pos - number;
    pos = ((newPos % 100) + 100) % 100;
  }
  if (line.startsWith("R")) {
    const newPos = pos + number;
    pos = ((newPos % 100) + 100) % 100;
  }
  pos === 0 ? numberOfZeros++ : "";
});

console.log(pos);
console.log(numberOfZeros);
