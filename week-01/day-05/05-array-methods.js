// 1. Loop through array
const arr = [10, 20, 30, 40, 50];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let num of arr) {
//   console.log(num);
// }
// arr.forEach((num) => console.log(num));

// 2. Sum array elements
const numbers = [5, 10, 15, 20, 25];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
// console.log(`Sum: ${sum}`);

// 3. Find Maximum in Array
const num = [3, 7, 2, 9, 1, 5];
let max = num[0];
for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}
// console.log(max);

// 4. Count Even Numbers
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = 0;
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    even++;
  }
}
// console.log(`Even numbers: ${even}`);

// 5. Create New Array from Old
const arra = [1, 2, 3, 4, 5];
let result = [];
arra.forEach((num) => {
  result.push(num * 2);
});
// console.log(result);

// 6. Filter array
const oneArr = [10, 5, 20, 15, 30, 8];
let resu = [];
oneArr.forEach((num) => {
  if (num > 10) {
    resu.push(num);
  }
});
console.log(resu);
