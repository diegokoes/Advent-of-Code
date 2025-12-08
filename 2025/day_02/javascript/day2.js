const fs = require("fs");

const filePath = "/home/koes/programming/Advent-of-Code/2025/day_02/puzzle_input.txt";
const filePathTest = "/home/koes/programming/Advent-of-Code/2025/day_02/test_file.txt";
const codes = fs.readFileSync(filePath, "utf-8").trim().split(",");
let total = 0;
codes.forEach((code) => {
  let separator = code.indexOf("-");
  let floor = Number(code.substring(0, separator));
  let ceiling = Number(code.substring(separator + 1));

  for (let index = floor; index <= ceiling; index++) {
    let num = index.toString();
    if (num.length % 2 === 0) {
      if (num.substring(0, num.length / 2) === num.substring(num.length / 2)) {
        console.log(index);
        total += index;
      }
    }
  }
});
console.log(total);
