// 1. Arithmetic operators
let num1 = 50;
let num2 = 10;
let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let rem = num1 % num2;
let exp = num1 ** num2;
// console.log({ add, sub, mul, div, rem, exp });

// 2. Compound assignment
let x = 100;
x += 50;
x *= 2;
x -= 75;
// console.log(x);

// 3. Comparison practice
let age = 22;
// console.log(age >= 18);
// console.log(age === 22);
// console.log(age !== 30);

// 4. Logical operators
let hasLaptop = true;
let hasInternet = true;
let hasTime = true;
let readyToCode = hasLaptop && hasInternet && hasTime;
console.log(`Ready To Code: ${readyToCode}`);

// 5. Practical calculation
let monthlySalaryGoal = 30000;
let yearlySalary = monthlySalaryGoal * 12;
let dailyRate = monthlySalaryGoal / 22;
let hourlyRate = dailyRate / 8;
console.log({
  monthlySalaryGoal,
  yearlySalary,
  dailyRate,
  hourlyRate,
});
