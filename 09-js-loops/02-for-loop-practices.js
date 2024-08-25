const{ getRandomNumber } = require('../utils/MathHelper.js')


for(let i = 1; i <= 10;  i++) {
    console.log(i)
}


for(let i = 100; i >= 0;  i--) {
    console.log(i)
}


for(let i = 0; i <= 50;  i+=2) {
    console.log(i)
}


for(let i = 1; i <= 50;  i++) {
    if(i % 2 === 0) console.log(i)
}

for(let i = 0; i <= 50;  i++) {
    if(i % 5 === 0) console.log(i)
}


let sum = 0

for(let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum)


let sum1 = 0

for(let i = 10; i <= 15; i++) {
    sum1 += i;
}
console.log(sum1)


let product = 1

for(let i = 1; i <= 6; i++) {
    product *= i;
}
console.log(product)



let str = 'TechGlobal School';

for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
}


let s = 'TechGlobal School';
let countO = 0
for(let i = 0; i < s.length; i++) {
    if (s[i] === 'o') countO++;
}

console.log(countO);



let r1 = getRandomNumber(10, 20);
console.log(`The random number is ${r1}`)
for(let i = 1; i <= r1; i += 2) {
    console.log(i)
}

let r2 = getRandomNumber(1, 10);
let prod = 1
console.log(`The random number is ${r2}`)
for(let i = 1; i <= r2; i++) {
    prod *= i
}

console.log(prod)


let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);
console.log(`The random numbers are = ${ran1} and ${ran2}`);

for(let i = Math.min(ran1, ran2); i <= Math.max(ran1, ran2); i++) {
    console.log(i);
}