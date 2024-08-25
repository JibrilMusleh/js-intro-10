const names = [ 'Alex', 'John' ];

console.log(names); // [ 'Alex', 'John' ]

// Adding elements to the end of the array
names.push('Jibril');
console.log(names);

names.push('Jane', 'Max', 'Data');
console.log(names);


// Removing elements from the end of the array

names.pop(); // data
names.pop(); // max
names.pop(); // jane
names.pop(); // jibirl
names.pop(); // john
names.pop(); // alex


console.log(names.pop()); // undefined
console.log(names);



const numbers = [10, 20, 30];
console.log(numbers);


// Adding elements to the beginning of the array
numbers.unshift(99); // 4
console.log(numbers); // [ 99, 10, 20, 30 ]


numbers.unshift(15, 23);
console.log(numbers); // [ 15, 23, 99, 10, 20, 30 ]


// Removing elements from the beginning of the array
numbers.shift(); // 15
numbers.shift(); // 23
numbers.shift(); // 99

console.log(numbers); // [ 10, 20, 30 ]

numbers.shift();
numbers.shift();
numbers.shift();

console.log(numbers.shift()); // undefined

