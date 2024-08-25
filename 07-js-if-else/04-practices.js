const { getRandomNumber } = require('../utils/MathHelper.js')

/*
Generate a random number between 1 and 10 both inclusive
And check if the number is 7
if it is 7
Otherwise, print false

PSEUDO CODE
1. Generate a random number 
2. Check if it is 7 or not
3. Depending on the codition print the result
*/


let r1 = getRandomNumber(1, 10)
console.log('Random number =', r1)

if (r1 === 7) {
    console.log(true)
}
else {
    console.log(false)
}

console.log(r1 === 7);



let gender = 'female';
let name = gender === 'female' ? 'Jane' : 'John';

console.log(name)


let r2 = getRandomNumber(1, 10)

console.log('Random number is', r2)

if (r2 % 2 === 0) {
    console.log('EVEN')
}
else {
    console.log('ODD')
}



