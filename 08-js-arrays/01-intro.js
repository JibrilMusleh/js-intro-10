//Array: stores multiple elements

const myNumberArray = [1, 2, 3, 4, 5];

console.log(myNumberArray)


// size of the array
let size = myNumberArray.length;

console.log('The size of the array is =', size);

//Accessing array elements using indexes
let elementAtIndex2 = myNumberArray[2]; // 3

console.log(elementAtIndex2);


//Updating array elements using indexes
myNumberArray[4] = 99;


console.log(myNumberArray[4]); // 99



//Getting fist element
console.log(myNumberArray[0]); // 1

//Get last element
console.log(myNumberArray[myNumberArray.length - 1]); // 99

//Creating an array using constructor
const myWords = new Array('I', 'Like', 'Arrays');

console.log(myWords);


const arr = []; // empty array or new Array()
arr.length; // 0


arr[5] = 10;

console.log(arr);
console.log(arr.length); // 6


// Mix data in the array

const mix = [10.5, 'Hello', null, undefined, NaN, 5, true, 2 == "2"];

console.log(mix);
console.log(mix.length);

mix[1].length // 5
