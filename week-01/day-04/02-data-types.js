// 1. Create variables of each type
let num = 69; // number
let string = "bug"; // string
let bool = true; // boolean
let nu = null; // null
let game = undefined; // undefined
// console.log(`Variable num is type: ${typeof num}`);
// console.log(`Variable string is type: ${typeof string}`);
// console.log(`Variable bool is type: ${typeof bool}`);
// console.log(`Variable nu is type: ${typeof nu}`);
// console.log(`Variable game is type: ${typeof game}`);

// 2. String concatenation
let firstName = "Piyush";
let lastName = " Anand";
let fullName = firstName + lastName;
// console.log(fullName);
// or
// console.log(`Fullname:${firstName} ${lastName}`);

// 3. Type converstion
let str = "25";
let number = 25;
// console.log(str + number); //2525
// console.log(number + str); //2525
// console.log(Number(str) + number); //50
// console.log(typeof(str)); // string
// console.log(typeof(number));// number
let conNum = String(number);
let conStr = Number(str);
// console.log(typeof conNum); // sting
// console.log(typeof conStr); // number

// 4. Build a greeting generator
let name = "Piyush";
let age = 22;
let city = "Delhi";
// console.log(`Hi, I'm ${name}, ${age} years old, from ${city}`);

// 5. boolean practice
let isStudent = true;
let hasJob = false;
let wantsToLearn = true;
// console.log({ isStudent, hasJob, wantsToLearn });
