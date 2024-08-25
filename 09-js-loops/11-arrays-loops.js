const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0]

let countPos = 0
for( const number of numbers) {
    if(number > 0) countPos++
}

console.log(countPos)


let countNeg = 0
for( const number of numbers) {
    if(number < 0) countNeg++
}

console.log(countNeg)


let countEven = 0

for(const n of numbers) {
    if(n % 2 === 0) countEven++
}
console.log(countEven);


let countNonNegOdd = 0;

for(const number of numbers) {
    if(number > 0 && number % 2 !== 0) countNonNegOdd++
}
console.log(countNonNegOdd);
