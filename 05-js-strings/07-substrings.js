let str = 'TechGlobal';


console.log(str.substring(0, 4)); // Tech
console.log(str.substring(4, 7)); // Glo
console.log(str.slice(0, 4)); // Tech


console.log(str.substring(4)); // Global
console.log(str.slice(4)); // Global
console.log(str.substring(7)); // bal
console.log(str.slice(7)); // bal

// Difference
let lan = 'JavaScript';

console.log(lan.slice(-6));

// Get the last 3 characters
console.log(lan.substring(lan.length - 3))

// Sc
lan.slice(4, 6);
console.log(lan.slice(-6, -4));

// 'Today is Sunday'; // 'Sun'

let day = 'Today is Sunday';
console.log(day.slice(-7, -3))

/*
TASK: retrieve substring from another string based on the given indexes
RETURN: it returns a new substring.
ARGUMENTS: takes 1 or 2 index arguments
    NOTE: Slice will work with negatibe indexes as well but if the left index is greater than the right then it will return empty string.
CHANGE ORNIGINAL VALUE: No
STATIC OR NON-STATIC: non-static
*/

/*
TASK: retrieve substring from another string based on the given indexes
RETURN: it returns a new substring.
ARGUMENTS: takes 1 or 2 index arguments
    NOTE: it will not work the negative index and will convert to zeron.
    NOTE: if the left index is greater than the right index, it modifies to correct way and give you the meaningful substring.
CHANGE ORNIGINAL VALUE: No
STATIC OR NON-STATIC: non-static
*/

console.log('Batch 10'.substring(-10, 100)); // 'Batch-10'
console.log('Batch 10'.slice(3, 100)); // 'ch-10'