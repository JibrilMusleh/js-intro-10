const arr1 = [1, 2, 3];

const arr2 = arr1;

console.log(arr1);
console.log(arr2);


arr1.push(4);

console.log(arr1);
console.log(arr2);

// privites are always immutable
let str1 = 'John';
let str2 = str1;

console.log(str1)
console.log(str2)

str1 = 'James';

console.log(str1)
console.log(str2)

// Copying your array to prevent mutability by using spread operator
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [...numbers1];

console.log(numbers1)
console.log(numbers2)

numbers1.push(6);

console.log(numbers1)
console.log(numbers2)

// Copying your array to prevent mutability by using loops


const boolean1 = [true, false, true];
const boolean2 = [];

console.log(boolean1)
console.log(boolean2)

boolean1.forEach((el) => {
    boolean2.push(el)
})


boolean1.push('Hello');

console.log(boolean1)
console.log(boolean2)

// Spread operator or loops doesn't work in case of nestes arrays or objects
const groups1 = [
    'John',
    ['Alex', 'Mariia'],
    ['John', 'Jane']
];

const groups2 = [...groups1];

console.log(groups1)
console.log(groups2)

groups1.push('Mark');
groups1[1][1] = 'Jessica';

console.log(groups1)
console.log(groups2)

// We call this copying with loops or spread as SHALLOW COPY
// DEEP COPY: safer way to prevent mutability and can be achieved suing JSON

