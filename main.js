// arr1;

// let n = 5;

// const getLevel2 = (n) => {
//   let arr = [];

//   for (let i = 0; i < n; i++) {
//     arr[i] = 2 ** (i + 1);
//   }
//   return arr;
// };

// console.log(getLevel2(n));

// arr2;

// let n = 5;
// let A = 2;
// let B = 3;
// let arr = [A, B];

// for (let i = 2; i < n; i++) {
//   arr[i] = (A + B) * 2 ** (i - 2);
// }

// console.log(arr);

// arr3;

// let n = 4;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 10) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// console.log(...arr);
// let res = arr.reverse();
// console.log(...arr);

// arr4;

// let n = 5;
// let arr = [];
// let arrToq = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 10) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     arrToq.push(arr[i]);
//   }
// }

// console.log(arr, arrToq);

// arr5;

// let n = 8;
// let arr = [];
// let arrToq = [];
// let arrJuft = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     arrJuft.push(arr[i]);
//   } else {
//     arrToq.unshift(arr[i]);
//   }
// }

// console.log(arr);
// arr = [...arrJuft, ...arrToq];
// console.log(arrJuft, ...arrToq);
// console.log(arr);

// arr6;

// let n = 6;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// console.log(arr);
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

// arr7;

// let n = 6;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// console.log(arr);
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

// arr8;

// let n = 5;
// let arr = [];
// let arrToq = [];
// let arrJuft = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length; i += 2) {
//   arrJuft.push(arr[i]);
// }
// for (let i = 1; i < arr.length; i += 2) {
//   arrToq.push(arr[i]);
// }

// console.log(arr);
// arr = [...arrJuft, ...arrToq];
// console.log(arrJuft, ...arrToq);
// console.log(arr);

// arr9;

// let n = 6;
// let arr = [];
// let arrToq = [];
// let arrJuft = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length; i += 2) {
//   arrJuft.unshift(arr[i]);
// }
// for (let i = 1; i < arr.length; i += 2) {
//   arrToq.push(arr[i]);
// }

// console.log(arr);
// arr = [...arrToq, ...arrJuft];
// console.log(arrToq, ...arrJuft);
// console.log(arr);

// arr10;

// let n = 6;
// let arr = [];
// let arrToq = [];
// let arrJuft = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length; i += 2) {
//   arrJuft.unshift(arr[i]);
// }
// for (let i = 1; i < arr.length; i += 2) {
//   arrToq.push(arr[i]);
// }

// console.log(arr);
// arr = [...arrToq, ...arrJuft];
// console.log(arrToq, arrJuft);
// console.log(arr);

// arr11;

// let n = 7;
// let K = 3;
// let L = 6;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// const rangeOutSum = (arr) => {
//   let res = 0;
//   let sumS = 0;
//   let sumI = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumS += arr[i];
//     if (K <= i && i <= L) {
//       sumI += arr[i];
//     }
//   }
//   res = sumS - sumI;
//   return res;
// };

// console.log(arr);
// console.log(rangeOutSum(arr));

// arr12;

// let arr = [10, false, "", "Saidaziz", null];
// let truthy = [];
// let falsy = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]) {
//     truthy.push(arr[i]);
//   } else {
//     falsy.push(arr[i]);
//   }
// }

// console.log(arr);
// console.log(truthy, falsy);

// arr13;

// let n = 5;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// const getOddMin = (arr) => {
//   let odd = [];
//   let res;
//   for (let i = 0; i < arr.length; i += 2) {
//     odd.push(arr[i]);
//   }
//   res = Math.min(...odd);
//   return res;
// };

// console.log(arr);
// console.log(getOddMin(arr));

// arr14;

// let n = 5;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// const getEvenMax = (arr) => {
//   let evens = [];
//   let res;
//   for (let i = 1; i < arr.length; i += 2) {
//     evens.push(arr[i]);
//   }
//   res = Math.max(...evens);
//   return res;
// };

// console.log(arr);
// console.log(getEvenMax(arr));

// arr15;

// let n = 5;
// let arr = [];
// let res = "Bunday son yoq";

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//     res = arr[i];
//   }
// }

// console.log(arr);
// console.log(res);

// arr16;

// let n = 5;
// let R = 4;
// let arr = [];
// let res;
// let oldTemp = Infinity;

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i <= arr.length; i++) {
//   let newTemp = Math.abs(R - arr[i]);
//   if (oldTemp > newTemp) {
//     oldTemp = newTemp;
//     console.log(newTemp);
//     res = arr[i];
//   }
// }

// console.log(arr);
// console.log(res);

// arr17;

// let n = 10;
// let arr = [];
// let res;
// let oldTemp = -Infinity;

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   let newTemp = arr[i] + arr[i + 1];
//   if (newTemp > oldTemp) {
//     oldTemp = newTemp;
//     res = [arr[i], arr[i + 1]];
//   }
// }

// console.log(arr);
// console.log(res);

// arr18;

// let n = 10;
// let arr = [];
// let res;

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] === arr[i + 1]) {
//     res = [i, i + 1];
//   } else {
//     res = "Bunday son yoq";
//   }
// }

// console.log(arr);
// console.log(res);

// arr19;

// let n = 5;
// let arr = [];
// let oldTemp;
// let oldCount = 0;
// let res;

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   let newTemp = arr[i];
//   let newCount = 1;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       newCount++;
//     }
//     if (oldCount < newCount) {
//       oldCount = newCount;
//       oldTemp = newTemp;
//     }
//   }
//   res = [oldTemp, oldCount];
// }

// console.log(arr);
// console.log(res[0] + " dan " + res[1] + " ta");

// arr20;

// let n = 10;
// let arrA = [];
// let arrB = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arrA[i] = temp;
// }

// for (let i = 0; i < arrA.length; i++) {
//   if (arrA[i] % 2 == 0) {
//     arrB.push(arrA[i]);
//   }
// }

// console.log(arrA);
// console.log(arrB.length);
// for (let i = 0; i < arrB.length; i++) {
//   console.log(arrB[i]);
// }

// arr21;

// let n = 6;
// let k = 2;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] + k;
// }

// console.log(arr);

// arr22;

// let n = 5;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// arr.push(...arr.splice(0, n / 2));

// console.log(arr);

// arr23;

// let n = 5;
// let arr = [];
// let temp = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   temp.unshift(arr[i]);
// }
// arr = temp;

// console.log(arr);
