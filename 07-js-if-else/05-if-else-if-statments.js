// if - else if - else if - else
// These are also known as ladder statments


const { getRandomNumber } = require('../utils/MathHelper.js')



let number = getRandomNumber(1, 4);

console.log('Random number is =', number);

if(number === 1) {
    console.log('one')
}
else if (number === 2) {
    console.log('two')
}
else if (number === 3) {
    console.log('three')
}
else if (number === 4) {
    console.log('four')
}
else {
    throw Error('the number is not in the range')
}


