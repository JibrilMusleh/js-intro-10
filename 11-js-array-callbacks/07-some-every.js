const numbers = [-5, 0, 5, 10, 23, -10];

console.log(numbers.some((numbers) => numbers % 5 === 0));
console.log(numbers.every((numbers) => numbers < 0))
console.log(numbers.some((numbers) => numbers > 0))