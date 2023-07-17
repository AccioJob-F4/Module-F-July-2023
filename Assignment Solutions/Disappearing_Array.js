function disappearingArray(N, myArr) {
  //your code here
  const numsSet = new Set(myArr);
  const missingNumbers = [];

  for (let i = 1; i <= N; i++) {
    if (!numsSet.has(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers.join(" ");
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
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = +inputArr[0];
  inputArr.shift();
  const Arr = inputArr[0].split(" ").map((x) => +x);

  console.log(disappearingArray(N, Arr));
}
