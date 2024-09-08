const numbers = [3, 4, 7, 3, 2, 2, 7];

let sum = 0
for(const number of numbers) {
   sum += number;
}

console.log(sum)
console.log(sum / numbers.length);

let product = 1
for(let i = 3; i < numbers.length; i++) {
    product *= numbers[i]
}
console.log (product)


numbers.slice(3)
product = 1
for(const number of numbers.slice(3)) {
    product *= number 
}
console.log(product);