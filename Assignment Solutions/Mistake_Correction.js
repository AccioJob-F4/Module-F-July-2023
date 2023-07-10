// Q : https://course.acciojob.com/idle?question=932e398e-bce1-4f7f-a95f-ca010b5717c8

function correctMistake(line, charToBeReplaced, what) {
  const regex = new RegExp(charToBeReplaced, "g");
  const correctedLine = line.replace(regex, what);
  return correctedLine;
}
const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  const [line1, ch, hc] = line.split(",");
  console.log(correctMistake(line1, ch, hc));
});
