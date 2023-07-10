// Q : https://course.acciojob.com/idle?question=4125e49c-5ff1-4805-8fc1-5844f7290107

function sum_array(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const innerArr = arr[i];
    for (let j = 0; j < innerArr.length; j++) {
      sum += innerArr[j];
    }
  }

  console.log(sum);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  sum_array(JSON.parse(line));
});
