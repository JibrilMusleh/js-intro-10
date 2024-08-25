const numbers = [3, 4, 7, 3, 2, 2, 7]

let sum = 0;

for(let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i]
}

console.log(sum)



let product = 1;

for(let i = 0; i < numbers.length; i++) {
    if(i % 2 !== 0) product *= numbers[i]
}
console.log (product)


