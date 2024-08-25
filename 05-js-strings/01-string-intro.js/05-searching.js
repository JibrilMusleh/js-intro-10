//startsWith() vs endsWith() vs includes()

let str = 'TechGlobal';

console.log(str.startsWith('Hi')); // false
console.log(str.startsWith('Tech')); // true
console.log(str.startsWith('t')); // false
console.log(str.startsWith('T')); // true
console.log(str.startsWith('')); // true

console.log(str.endsWith('apple')); // false
console.log(str.endsWith('obal')); // true
console.log(str.endsWith('la')); // false
console.log(str.endsWith('l')); // true
console.log(str.endsWith('Global')); // true
console.log(str.endsWith('TechGlobal')); // true
console.log(str.endsWith('')); // true

console.log(str.includes('G')); // true
console.log(str.includes('oab')); // false
console.log(str.includes('')); // true
console.log(str.includes('TechGlobal')); // true
console.log(str.includes('Tech')); // true
console.log(str.includes('Global')); // true

/*
startsWith()
TASK: checks if string starts with another substring
RETURN: returns a boolean
ARGUMENTS: take a substring as an argument
CHANGE ORIGINAL VALUE: deosnot modify the original value
STATIC OR NON-STATIC: non-static
*/

/*
endsWith()
TASK: checks if string ends with another substring
RETURN: returns a boolean
ARGUMENTS: take a substring as an argument
CHANGE ORIGINAL VALUE: deosnot modify the original value
STATIC OR NON-STATIC: non-static
*/

/*
includes()
TASK: checks if string contains - includes with another substring
RETURN: returns a boolean
ARGUMENTS: take a substring as an argument
CHANGE ORIGINAL VALUE: deosnot modify the original value
STATIC OR NON-STATIC: non-static
*/

// indexof() vs lastindexof()
let message = 'Can i can a can?';

console.log(message.charAt(4)); // 'I'
console.log(message.indexOf('I')); // 4
console.log(message.indexOf('?')); // 15
console.log(message.lastIndexOf('?')); // 15  

console.log(message.indexOf('can')); // 6
console.log(message.lastIndexOf('can')); // 12

console.log(message.indexOf('Can')); // 0
console.log(message.lastIndexOf('Can')); // 0

message.indexOf('A'); // -1
message.indexOf('apple'); // -1
message.indexOf('CAN'); // -1

console.log(message.indexOf('')); // 0
console.log(message.lastIndexOf('')); // 16