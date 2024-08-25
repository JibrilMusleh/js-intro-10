const { getRandomNumber } = require ('../utils/MathHelper.js');

let written = 7;
let guess = undefined;
let attempts = 0;

while(written !== guess) {
    guess = getRandomNumber(1, 10);
    console.log(guess);
    attempts++;
}
console.log(`We got the matching number ${attempts}`)


// Infinite loop
// while(true) {
    //console.log('hello')
//}


let num = 1;

while (num <= 10) {
    console.log(num); // 1, 2, 3,
    num++;
}

let i = 0

while (i <= 50) {
    if (i % 2 === 0) {
        console.log(i)
    }
    i++
}

let J = 1
let countE1 = 0

while (J <= 10) {
    if (J % 2 === 0) countE1++
    J++
}

console.log(countE1);

let sum = 0

for(let i = 3; i <= 7; i++) {
    sum += i;
}
console.log(sum)