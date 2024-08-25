/*
  'Toyota', 'Tesla', 'Honda', 'BMW'
  7, 6, 5, 25
*/

let favNumber = 7;
let firstKidsName = 'Alex';

let cars = ['GMC' ,'Toyota', 'Tesla', 'Honda', 'BMW' ];
let numbers = [ 7, 6, 5, 25 ];

console.log(cars);
console.log(numbers);

// Getting a specific element from an array using index
// Index of the elemts in an array always starts with zero
console.log(cars[2]);
console.log(numbers[1]);

// Updating the existing elements with new values
cars[0] = 'GMC';

console.log(cars);

cars[3];

let myFavCar = cars[3];

// Getting the size of an array
// length is an array property which returns the total number of elemts in the array.
console.log(cars.length);
console.log(numbers.length);

const students = ['Alex', 'John', 'Jane', 'Maria'];

students[-1]; // undefined
students[4]; // undefined

students[2] = 'Jessie'
console.log(students);

students = [1];
console.log(students);

students[6] = 'Data';
console.log(students);

// crating an array with constructor
const array = new Array('Maria', 25, null, undefined, Symbol('Hello'), 25n);
const array2 = ('Maria', 25, null, undefined, Symbol('Hello'), 25n);

console.log(typeof array);
console.log(typeof array2);
console.log(typeof cars);
console.log(typeof numbers);

// accesssing the first and last element in the arrat dynamically
const nums = [10, 20, 30, 40, 50, 60];

let first = nums [0];
let last = nums [ nums.length - 1 ];

console.log(first);
console.log(last);

