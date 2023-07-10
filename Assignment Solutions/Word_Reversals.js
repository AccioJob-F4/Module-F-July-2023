// Q : https://course.acciojob.com/idle?question=16410112-d54f-4f03-830b-b4bd0c12c8f7

function reverseWords(str) {
  const words = str.split(" ");
  const reversedWords = words.map((word) => word.split("").reverse().join(""));
  const reversedSentence = reversedWords.join(" ");
  console.log(reversedSentence);
}

/*Do not change the code below*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
let noGuessName = [];
rl.on("line", function (line) {
  reverseWords(line);
});
