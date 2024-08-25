let num1 = 6
let num2 = 4

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 / num2);
console.log(num1 % num2);

// ES6 backticks
console.log(`The sum = ${num1 + num2}`)
console.log(`The result of  = ${num1 * num2}`)

let fullname = 'John Doe';
let age = 25;
let num = 5

console.log('The per son is ' + fullname + 'and the age is ' + age + ' S/he wil turn to ' + (age + num) + ' in ' + num + ' years ');
console.log(`The person is '${fullname}' and the age is '${age}'. S/he will turn to '${age + num}' in '${num}' years.`);

let width = 5, height = 8;

console.log('The area = ' + width * height)
console.log('The perimeter = ' + 2 * (width + height))


/*
An annual average salary for an SDET in the Unites States is 120k. 
Write a program that calculates and prints the monthly and bi-weekly and weekly average amount that 
an SDET makes in the United States.

Annual average salary = $120,000.00
1 year = 12 months
1 year = 52 weeks
Biweekly = every other week  26 payments
*/

let salary = 120000; 

console.log(`Your average salary = $${salary}.`);
console.log(`Your average salary = $${salary / 12}.`);
console.log(`Your average salary = $${salary / 26}.`);
console.log(`Your average salary = $${salary / 52}.`);
