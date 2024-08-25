/*
Create a functions which prints 'Hi' when invoked.
*/
// This a void zero argumet function.
function sayHi() {
    console.log('Hi')
}

sayHi(); // 'Hi'

/*
Write a function which takes a string name as a argument
which returns 'Hello {name}!'

sayHello('Alex') -> 'Hello, Alex'
*/

function sayHello(name) {
    return `Hello, ${name}`
}


let result = sayHello('Alex');

console.log(result);


function greet(greeting, name) {
    console.log(`${greeting}, ${name}`)
}
greet('Hello', 'Malik')
greet('Hi', 'Ali')
greet('Goodmorning', 'John')
greet('Goodnight', 'Alex')


function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

console.log(sum(3, 5));
console.log(sum(4, 7));
console.log(sum(-2, 3));


function product(n1,n2,n3) {
    let result = n1 * n2 * n3;
    return result;
}

console.log(product(2, 4, 5) + 20)
console.log(product(3, 7, 6) % 10)
console.log(product(5, 0, 9))


