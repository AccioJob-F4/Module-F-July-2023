function wordGame(N, myArr) {
  let usedWords = new Set();
  let lastLetter = myArr[0].charAt(myArr[0].length - 1);

  for (let i = 0; i < N; i++) {
    const word = myArr[i];

    // Check if the word is unique
    if (usedWords.has(word)) {
      return "NO";
    }

    // Check if the first letter of the current word matches the last letter of the previous word
    if (i > 0 && word.charAt(0) !== lastLetter) {
      return "NO";
    }

    usedWords.add(word);
    lastLetter = word.charAt(word.length - 1);
  }

  return "YES";
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = +inputArr[0];
  inputArr.shift();

  console.log(wordGame(N, inputArr));
}
