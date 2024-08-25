// + operator is used for both concatination and addition.
// concatination is used for combining strings with strings or other data types.

console.log(3 + 2 + 1); //6
console.log(3 + 2 + '1'); //'51'
console.log(3 + '2' + 1); //'321'

console.log('5' - 2) //3
console.log('5' * '3') //15

console.log('5a' * 2);// NaN
console.log(2 + 3 * 2 - 'Hello');// NaN

console.log(true + 5) //6
console.log(false * 5) //0

console.log('abc' + true);// abctrue
console.log('123' + false);// 123false

