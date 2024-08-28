const { getRandomNumber} = require('../utils/MathHelper.js')


//1 
for(i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}

//2 
for(i = 1; i <= 50; i++) {
    if(i % 2 === 0 && i % 3 === 0) console.log(i);
}

//3
for(i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
}

//4
for(let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i ** 2}`);
}

//5
let sum = 0
for(let i = 1; i <= 10; i++) {
    sum += i
}
console.log(sum);


//6
let randomNum = Math.floor((Math.random() * 10) + 1);
let factorial = randomNum;
for (let i = randomNum - 1; i > 1; i--) {
    factorial *= (i);
}
if(factorial === 0) factorial = 1;
console.log(factorial);

//7
let attempts = 0;
let ranNum1;

do {
    ranNum1 = getRandomNumber(1, 100);
    attempts++;
}while(ranNum1 % 5 !== 0);

    console.log(`The random number is ${ranNum1} and it took ${attempts} attempt to generate it`);

//8
let countries = ['Germany', 'Argentina', 'Ukraine', 'Romania']
console.log(countries.sort())

//9
const cartoonDogs = [ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ];

console.log(cartoonDogs);

for(const Dog of cartoonDogs) {
    if(Dog.includes('Pluto')) {
        console.log(false);
    } 
    else console.log(true);
    break;
}

//10
const cartoonCats = [ 'Garfield', 'Tom', 'Sylvester', 'Azrael' ];

console.log(cartoonCats.sort());

for (const cat of cartoonCats) {
    if (cat === 'Garfield' && cat === 'Felix') {
       console.log(true);
    }
    else console.log(false);
    break;
}

//11
const numbers = [10.5, 20.75, 70, 80, 15.75];
console.log(numbers);

for (const number of numbers) {
    console.log(number);
}

//12
const objects = [ 'Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ];
let count = 0
let counter = 0


console.log(objects);

for(const object of objects) {
    if(object.toUpperCase().startsWith('B') || object.toUpperCase().startsWith('P')) count++;
}
console.log(count);

for (const object of objects) {
    if(object.toLowerCase().includes('book') || object.toLowerCase().includes('pen')) counter++
}
console.log(counter);

//13
const numberArr = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];


let is10 = 0; 
let moreThan10 = 0; 
let lessThan10 = 0;

for (let number of numberArr) {
    if (number < 10) lessThan10++;
    else if (number > 10) moreThan10++;
    else is10++;
}

console.log(numberArr);
console.log(`Elements that are more than 10 = ${moreThan10}`);
console.log(`Elements that are less than 10 = ${lessThan10}`);
console.log(`Elements that are 10 = ${is10}`);

//14
