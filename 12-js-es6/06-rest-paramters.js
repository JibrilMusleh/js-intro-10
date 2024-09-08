function sum(...args) { // rest perameters
    let result = 0;

    for(const number of args) {
        result += number;
    }
    return result
}



console.log(sum()) // 0
console.log(sum(3)) // 3
console.log(sum(3, 5)) // 8


function prod(...values) { // rest perameters
    if(values.length === 0) return 0;
  else values.reduce((acc, curr) =>  acc * curr, 1)
}

console.log(prod()) // 1
console.log(prod(3)) // 3
console.log(prod(3, 5)) // 15

