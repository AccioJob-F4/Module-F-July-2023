// Q : https://course.acciojob.com/idle?question=1f17a798-1a70-4a7f-9fbc-b9101d9aaa37

function sortStudents(arr) {
  const sortedNames = arr.map((student) => student[0]).sort();
  return sortedNames;
}

/*Do not change the code below */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (input) => {
  const arr = JSON.parse(input);
  console.log(sortStudents(arr));
  readline.close();
});
