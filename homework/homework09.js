//1
const fizzBuzz1 = num => {
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if(num % 3 === 0) return 'fizz';
    else if(num % 5 === 0) return 'buzz';
    else return num;
}
console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));

//2
const fizzBuzz2 = num => {
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if(num % 3 === 0) return 'fizz';
    else if(num % 5 === 0) return 'buzz';
    else return num;
}

//3
/*Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
*/


const findSumNumbers = str => {
    str.filter('!@#$%^&')
}

console.log(findSumNumbers("abc$"))
console.log(findSumNumbers("a1b4c  6#"))
console.log(findSumNumbers("ab110c045d")) 
console.log(findSumNumbers("525")) 
console.log(findSumNumbers("3 for 10 dollars"))

//4
