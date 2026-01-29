// 1. Create and Access Arrays
const fruits = ["apple", "banana", "orange", "papaya", "grapes"];
// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(fruits[fruits.length - 1]);

// 2. Modify Array Elements
const arr = [10, 20, 30, 40, 50];
arr[1] = 25;
arr[arr.length - 1] = 55;
// console.log(arr);

// 3. Array Methods - push & pop
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.pop();
// console.log(stack);

// 4. Array Methods - shift & unshift
const num = [2, 3, 4];
num.unshift(1);
num.push(5);
num.shift();
// console.log(num);

// 5. Array length
const hero = ["batman", "superman", "spiderman"];
// console.log(`I have ${hero.length} superheroes`);

// 6. Store Calculation Results in Array
const result = [];
result.push(5 + 3);
result.push(10 * 2);
result.push(20 / 4);
result.push(8 - 2);
console.log(result);
