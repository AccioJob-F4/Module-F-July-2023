function SumofTwo(N, Target, myArr) {
  const hashMap = {};
  let minIndex1 = Infinity;
  let minIndex2 = Infinity;

  for (let i = 0; i < N; i++) {
    const num = myArr[i];
    const complement = Target - num;

    if (hashMap.hasOwnProperty(complement)) {
      const index1 = hashMap[complement] + 1; // Adding 1 to convert to 1-indexed
      const index2 = i + 1; // Adding 1 to convert to 1-indexed

      // Update the minimum indices if necessary
      if (index2 < minIndex2 || (index2 === minIndex2 && index1 < minIndex1)) {
        minIndex1 = index1;
        minIndex2 = index2;
      }
    }

    // Save the current number and its index in the hash table
    if (!hashMap.hasOwnProperty(num)) {
      hashMap[num] = i;
    }
  }

  return `${minIndex1} ${minIndex2}`;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
let x = 0;
let K;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber === 0) {
    [size, K] = inputArr[0].split(" ").map((x) => +x);
  } else if (lineNumber < size) {
  }

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const myArr = inputArr[1].split(" ").map((x) => +x);
  console.log(SumofTwo(size, K, myArr));
}
