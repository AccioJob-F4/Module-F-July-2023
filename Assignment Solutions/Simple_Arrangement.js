// Q : https://course.acciojob.com/idle?question=1da173e5-d9fd-4a45-b517-6aa0ca61a0b1

function simpleArrangement(arr, n) {
  const MAX_VALUE = n;

  // Encoding: Store arr[i] at arr[i] index
  for (let i = 0; i < n; i++) {
    arr[i] += (arr[arr[i]] % MAX_VALUE) * MAX_VALUE;
  }

  // Decoding: Extract original values from encoded values
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(arr[i] / MAX_VALUE);
  }

  return arr;
}

var readline = require("readline").createInterface(process.stdin);
var dp = new Array(200000);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;

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
  const N = size;
  inputArr.shift();
  inputArr = inputArr[0].split(" ").map((x) => +x);
  console.log(simpleArrangement(inputArr, N).join(" ").trim());
}
