// 1. map() - Double All Numbers
const arr1 = [1, 2, 3, 4, 5];
const doubled = arr1.map((num) => num * 2);
// console.log(doubled);

// 2. map() - Convert Celsius to Fahrenheit
const celsius = [0, 10, 20, 30, 40];
const celsiusToFahrenheit = celsius.map((c) => (c * 9) / 5 + 32);
// console.log(celsiusToFahrenheit);

// 3. filter() - Get Even Numbers
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = arr2.filter((num) => num % 2 === 0);
// console.log(even);

// 4. filter() - Get Long Words
const arr3 = ["hi", "hello", "hey", "goodbye", "yes"];
const big3 = arr3.filter((word) => word.length > 3);
// console.log(big3);

// 5. find() - Find First Adult
const arr4 = [12, 15, 18, 21, 10];
const firstAdult = arr4.find((age) => age >= 18);
// console.log(firstAdult);

// 6. Combined Methods
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arr5.filter((num) => num % 2 === 0).map((num) => num * num);
console.log(result);
