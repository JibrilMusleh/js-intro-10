const animals = [ 'Cat', 'Dog', 'Cow', 'Monkey', 'Bird' ];

const animalsparcial1 = animals.slice(0, 3);
const animalsparcial2 = animals.slice(2, 4);
console.log(animals);
console.log(animalsparcial1);
console.log(animalsparcial2);



// Get the last 3 elements
const animalsparcial3 = animals.slice(2);
const animalsparcial4 = animals.slice(-3);


console.log(animalsparcial3);
console.log(animalsparcial4);

console.log(animals.slice(6, 10));
console.log(animals.slice(2, 3)); 


const numbers = [5, -2, 20, 50, -10];

console.log(Math.min(...numbers.slice(0, 3)));
console.log(Math.max(...numbers.slice(3)));


// splice
// pop() --> removes the last elemnt
// shift() --> removes the first element
// push() --> add elemnt to end
// unshift() --> adds elment to start

const cities = ['Chicago', 'Rome', 'Berlin']

// Adding an element in the middle of the array
cities.splice(1, 0, 'LA');

console.log(cities)

// Adding multiple elements in the middle of the array
cities.splice(2, 0, 'Miami', 'Paris');

console.log(cities);

// Removing from the middle of the array

cities.splice(4, 1);

console.log(cities);

// Remove some elements and add new ones instead
cities.splice(1, 2, 'Des Plaines', 'Porto', 'Brugge')

console.log(cities);














