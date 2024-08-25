const {getRandomNumber} = require('../utils/MathHelper.js')

let r1 = getRandomNumber(-10, 10)
console.log('Random Number is =', r1);

if (r1 > 0) {
    console.log('The number is Positive')
}
else if(r1 < 0) {
    console.log('The number is Negative')
}
else {
    console.log('The number is Zero')
}


let r2 = getRandomNumber(1, 12)

if (r2 === 12 || r2 === 1 || r2 === 2 ) {
    console.log('WINTER')
}
else if(r2 === 3 || r2 === 4 || r2 === 5) {
    console.log('SPRING')
} 
else if(r2 === 6 || r2 === 7 || r2 === 8) {
    console.log('SUMMER')
}
else if(r2 === 9 || r2 === 10 || r2 === 11) {
    console.log('FALL')
}

console.log('Random month is =', r2)

