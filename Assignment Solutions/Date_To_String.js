// Q : https://course.acciojob.com/idle?question=e3ed3080-dc50-4af4-9ac2-7a2298da833c

function whichDay(date) {
  const map = ["last", "first", "second", "third", "fourth", "fifth", "sixth"];
  const day = date.getDay();

  return `Today is the ${map[day]} day of the week`;
}

const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  const [yyyy, mm, dd] = line.split(" ");

  const date = new Date(yyyy, mm, dd);
  const ans = whichDay(date);
  console.log(ans);
});
