// function fetchData(url, callback) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => callback(null, data))
//     .catch((err) => callback(err, null));
// }

// fetchData("https://randomuser.me/api/", (error, data) => {
//   console.log("CALLBACK is called");

//   if (error) {
//     console.log("ERROR: ", error);
//   } else console.log("DATA : ", data);
// });

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((err) => reject(err));
//   });
// }

// fetchData("https://randomuser.me/api/hg")
//   .then((data) => {
//     console.log("DATA : ", data);
//   })
//   .catch((error) => console.log("ERROR: ", error));

// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// async function fetchDataExample() {
//   try {
//     const data = await fetchData("https://randomuser.me/api/");
//     console.log("DATA : ", data);
//   } catch (error) {
//     console.log("ERROR : ", error);
//   }
// }

// fetchDataExample();

// function delayLog(message, delay) {
//     setTimeout(() => {
//         console.log(message)
//     }, delay)
// }

// delayLog('Hola', 5000)

// setTimeout(() => {
//   console.log("Hola");
// }, 5000);

// setInterval(() => {
//   console.log("Hola");
// }, 2000);
