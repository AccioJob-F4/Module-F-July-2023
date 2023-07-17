function MostOccured(N, myArr) {
  let frequencyMap = {};
  for (let i = 0; i < N; i++) {
    const currentString = myArr[i];
    if (frequencyMap[currentString] === undefined) {
      frequencyMap[currentString] = 1;
    } else {
      frequencyMap[currentString]++;
    }
  }

  let maxOccurrences = 0;
  let lexicographicallyLargest = "";
  for (const [string, occurrences] of Object.entries(frequencyMap)) {
    if (occurrences > maxOccurrences) {
      maxOccurrences = occurrences;
      lexicographicallyLargest = string;
    } else if (
      occurrences === maxOccurrences &&
      string > lexicographicallyLargest
    ) {
      lexicographicallyLargest = string;
    }
  }

  return lexicographicallyLargest;
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

  //Exit Condition
  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = +inputArr[0];
  inputArr.shift();

  console.log(MostOccured(N, inputArr));
}
