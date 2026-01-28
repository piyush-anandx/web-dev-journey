// 1. Even or Odd
let number = 3;
// console.log(number % 2 === 0 ? "even" : "odd");

// 2. Largest of two numbers
let num1 = 2565;
let num2 = 2649;
// console.log(
//   num1 > num2
//     ? `The larger number is: ${num1}`
//     : `The larger number is ${num2}`,
// );

// 3. Discount calculator
let originalPrice = 1000;
let discountPercent = originalPrice > 500 ? 0.1 : 0.05;
let discountAmount = originalPrice * discountPercent;
let finalPrice = originalPrice - discountAmount;
// console.log(
//   `Original: ₹${originalPrice}, Discount: ${discountPercent * 100}%, Final: ₹${finalPrice}`,
// );

// 4. Leap year checker
// let year = 2024
// console.log(
//   year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
//     ? "it's a leap year"
//     : "it's not a leap year",
// );

// 5. Simple quiz
let question = "What is 5 + 3?";
let userAnswer = 8;
let correctAnswer = 8;
// console.log(userAnswer === correctAnswer ? "Correct! ✓" : "Wrong! ✗");

// 6. Age in dog years
let YourAge = 22;
let dogAge1 = YourAge * 10.5;
let dogAge2 = YourAge * 7;
// console.log(
//   YourAge < 2
//     ? `Your age in dog age: ${dogAge1}`
//     : `Your age in dog age: ${dogAge2}`,
// );

// 7. BMI calculator
let weight = 65; // in kg
let height = 1.65; // in m
let bmi = weight / (height * height);
if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal");
} else {
  console.log("Overweight");
}
