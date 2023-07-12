// function outer() {
//   const outerVar = "I am from outer";

//   function inner() {
//     console.log(outerVar);

//     function innermost() {
//       console.log(outerVar);
//     }

//     return innermost;
//   }

//   return inner;
// }

// var closureFn = outer();
// var innermost = closureFn();
// innermost();

// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);

// const sum1 = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum1);

// const person = {
//   name: "Divyansh",
//   age: 25,
//   org: "Razorpay",
//   designation: "SDE",
//   address: {
//     street: "Jakasandra",
//     houseNo: 53,
//     pin: 560034,
//   },
// };

// const spreadedPerson = { ...person };
// const deepCopy = JSON.parse(JSON.stringify(person));

// deepCopy.name = "Ravi";
// deepCopy.address.houseNo = 90;
// console.log("person : ", person);
// console.log("deepCopy : ", deepCopy);

// spreadedPerson.name = "Ravi";

// spreadedPerson.address.houseNo = 90;

// console.log("person : ", person);
// console.log("spreadedPerson : ", spreadedPerson);

// person.name = "Raj";

// let name = "Divyansh";
// name[0] = "S";

// name = "Suyash";

// console.log(name);

// let numbers = [56, 65, 1, 2, 4, 5];

// if (!Array.prototype.divyansh) {
//   Array.prototype.divyansh = function (element) {
//     for (var i = 0; i < this.length; i++) {
//       if (this[i] === element) return true;
//     }
//     return false;
//   };
// }

// console.log(numbers.divyansh(556));

// "use strict";
// x = 10;
// console.log(x);

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));

// function addOuter(a) {
//   function addInner(b) {
//     return a + b;
//   }

//   return addInner;
// }

// const addInner = addOuter(2);
// console.log(addInner(3));

// console.log(addOuter(2)(3))

// null V/S undefined V/S not defined

// let a = null;
// let b;
// console.log(a);
// console.log(b);
// console.log(c);

// false;
// 0;
// NaN;
// null;
// undefined;
// ("");

// true;
// 1;
// ("dvfhjds");
// (" ");

const a = {
  b: 1,
  c: {
    d: 2,
    e: {
      f: 5,
      g: 6,
    },
  },
  h: 7,
};

function flattenObj(a) {
  return something;
}

something = {
  "a.b": 1,
  "a.c.d": 2,
  "a.c.e.f": 5,
  "a.c.e.g": 6,
  "a.h": 7,
};
