// 1. Convert to Arrow Function
const double = (x) => x * 2;
// console.log(double(4));

// 2. Multiple Arrow Functions
const triple = (x) => x * 3;
const square = (x) => x * x;
const cube = (x) => x * x * x;
// console.log(triple(4));
// console.log(square(4));
// console.log(cube(4));

// 3. Arrow Function with 2 Parameters
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
// console.log(mul(20, 5));
// console.log(div(20, 5));

// 4. Practical Arrow Functions
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log("Piyush", "Anand");

const calculateDiscount = (price, percent) => {
  return price - price * (percent / 100);
};
// console.log(calculateDiscount(100, 10));

// 5. Array + Arrow Function Preview
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
