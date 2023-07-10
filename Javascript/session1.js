// function add(a, b) {
//   console.log(a + b);
// }

// add(2, 3);
// add(2.2, 3);
// add(2.3, 3.3);

// const subtract = (a, b) => b - a;

// console.log(subtract(2, 5));

// (function greet() {
//   console.log("Hola amigos!");
// })();

// const a1 = { b: 1, c: 2 };

// function hola1(obj) {
//   const keys = Object.keys(obj);
//   const vals = Object.values(obj);

//   console.log({ keys, vals });

//   const updated = {};

//   for (let i = 0; i < vals.length; i++) {
//     updated[vals[i]] = keys[i];
//   }

//   console.log(obj, updated);
// }

// hola1(a1);

// for (let i in a1) {
//   console.log(i, a1[i]);
// }

// let numbers = [1, 2, 3];
// numbers.forEach(function (number) {
//   console.log(number * 2);
// });

// let totalPrice = 0;
// function calculateTotal(price) {
//   totalPrice += price;
//   console.log("totalPrice : ", totalPrice);
//   return totalPrice;
// }

// console.log(calculateTotal(10));
// console.log(calculateTotal(10));
// console.log(calculateTotal(10));

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));
// console.log(add(2, 3));
// console.log(add(2, 3));
// console.log(add(2, 3));

let person = {
  name: "John",
  age: 25,
  greet: function () {
    console.log("Hello!");
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.greet());
