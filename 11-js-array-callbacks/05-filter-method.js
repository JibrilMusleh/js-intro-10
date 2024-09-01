const numbers = [10, 5, 100, 77, 50, 65, 0];
// Find all the numbers that are 50 or more -> [100, 77, 50, 65]

const moreThan50 = numbers.filter ((x) => x >= 50);
console.log(moreThan50);
console.log(moreThan50.length);



const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

const fruitsWithApple = fruits.filter((fruit) => fruit.toLowerCase().includes('apple'));
const fruitsWithA = fruits.filter((fruit) => fruit.toLowerCase().includes('a'));
const fruitsWithI = fruits.filter((fruit) => fruit.toLowerCase().includes('i'));

console.log(fruitsWithApple);
console.log(fruitsWithA.length);
console.log(fruitsWithI.length);