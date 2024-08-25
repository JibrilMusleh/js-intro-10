const numbers = [ 5, 10, 5, 10, 25, 100, 77, 5, 5 ];


// We can check if the array contains some specific elements
numbers.includes(5); // true
numbers.includes(77); // true
numbers.includes(20); // false


// indexOf() vs lastIndexOf()
numbers.indexOf(5); // 0
numbers.lastIndexOf(5); // 8

numbers.lastIndexOf(10); // 1
numbers.IndexOf(10); // 3

numbers.IndexOf(25); // 4
numbers.LastIndexOf(25); // 4

numbers.IndexOf(3); // -1
numbers.LastIndexOf(3); // -1


// How to check contians an element without includes() method
const cities = ['Chicago', 'Berlin', 'Rome', 'Brugge'];

cities.includes('Berlin'); // true
cities.indexOf('Berlin') != -1; // true


cities.includes('Berlin', 3); // false



// Check the number array if it constains in the second half of the array
const arr = [10, 20, 30, 40, 25, 100, 5, 10, 20, 90];

arr.includes(30); // true
arr.includes(30, arr.length / 2);
