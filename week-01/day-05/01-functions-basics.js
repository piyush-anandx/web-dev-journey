// 1. Simple function
function sayHello() {
  console.log(`Hello, World!`);
}
// sayHello();
// sayHello();
// sayHello();

// 2. Function with parameters
function greet(name) {
  console.log(`Hello ${name}!`);
}
// greet("Piyush");
// greet("Mom");
// greet("Dad");

// 3. Function with Return Value
function add(a, b) {
  return a + b;
}
let result = add(5, 3);
// console.log(result);

// 4. Calculator Functions
// add function creted above in 3
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
// console.log(add(20, 4));
// console.log(sub(20, 4));
// console.log(mul(20, 4));
// console.log(div(20, 4));

// 5. Temperature Converter Function
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(25));
// console.log(celsiusToFahrenheit(100));

// 6. Age Calculator Function
function calculateAge(birthYear) {
  return 2026 - birthYear;
}
// console.log(calculateAge(2004));
// console.log(calculateAge(1990));
// console.log(calculateAge(2010));

// 7. Even or Odd Function
function isEven(number) {
  return number % 2 === 0;
}
console.log(`4 is even: ${isEven(4)}`);
console.log(`7 is even: ${isEven(7)}`);
console.log(`7 is even: ${isEven(10)}`);
console.log(`7 is even: ${isEven(13)}`);
