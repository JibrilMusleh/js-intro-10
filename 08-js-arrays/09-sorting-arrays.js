const names = [ 'alex', 'Adam', 'Jane', 'John', 'alexander'];

// Adam, Jane, John, alex, alexander

const stortedNames = names.sort();

console.log(names);
console.log(stortedNames);

const numbers = [1, 40, 2, 3, 10, 100];

// 1, 2, 3, 10, 40, 100

const numbersSorted = numbers.sort();

console.log(numbers);
console.log(numbersSorted);


const nums = [1, 40, 2, 3, 10, 100];

nums.sort((a, b) => a - b);

console.log(nums);