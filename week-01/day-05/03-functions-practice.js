// 1. function getGrade(score).
const getGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};
// console.log(getGrade(95));
// console.log(getGrade(87));
// console.log(getGrade(73));
// console.log(getGrade(65));
// console.log(getGrade(42));

// 2. Leap year function
const isLeapYear = (year) => {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
// console.log(isLeapYear(2024));
// console.log(isLeapYear(2023));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(1900));

// 3. FizzBuzz function
const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(7));

// 4. Password Validator
const isValidPassword = (password) => {
  if (password.length < 8) {
    return false;
  }
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
      return true;
    }
  }
  return false;
};
// console.log(isValidPassword("abc123"));
// console.log(isValidPassword("password"));
// console.log(isValidPassword("secure123"));
// console.log(isValidPassword("pass"));

// 5. Sum of Range
const sumRange = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }
  return sum;
};
// console.log(sumRange(1, 4));

// 6. Factorial Function
const factorial = (n) => {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }
  return result;
};
console.log(factorial(5));
