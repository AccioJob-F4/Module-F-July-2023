// Q : https://course.acciojob.com/idle?question=6bf07170-4a43-4c05-8dbd-80dca21f8ef4

function doesItContain(line1, ch) {
  const contains = line1.includes(ch);
  return contains;
}

const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  const [line1, ch, hc] = line.split(",");

  console.log(doesItContain(line1, ch));
});
