const { getRandomNumber} = require('../utils/MathHelper.js')

let attempts = 0;
let written = 3;
let guess;
do {
    guess = getRandomNumber(1, 10);
    attempts++;
} while (guess !== written);

let time = attempts > 1 ? 'times' : 'time';
console.log(`We have got ${written} after ${attempts} ${time}!`)




let attempts2 = 0;
let ran;
do {
    ran = getRandomNumber(1, 10);
    attempts2++;
} while (ran % 2 !== 0 );

let time2 = attempts2 > 1 ? 'times' : 'time';
console.log(`We have got an even number after ${attempts2} times!`)