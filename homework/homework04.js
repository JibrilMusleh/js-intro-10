const { getRandomNumber} = require('../utils/MathHelper.js')


//1 
for(i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}

//2 
for(i = 1; i <= 50; i++) {
    if(i % 2 === 0 && i % 3 === 0) console.log(i);
}

//3
for(i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
}

//4
for(let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i ** 2}`);
}

//5
let sum = 0
for(let i = 1; i <= 10; i++) {
    sum += i
}
console.log(sum);


//6
let randomNum = Math.floor((Math.random() * 10) + 1);
let factorial = randomNum;
for (let i = randomNum - 1; i > 1; i--) {
    factorial *= (i);
}
if(factorial === 0) factorial = 1;
console.log(factorial);

//7
let attempts = 0;
let number;
do {
    guess = getRandomNumber(1, 100);
    attempts++;
} while (guess !== written);

let time = attempts > 1 ? 'times' : 'time';
console.log(`The random number is ${written} after ${attempts} ${time}!`)
