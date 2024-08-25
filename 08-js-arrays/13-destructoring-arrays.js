const favMovies = [ 'Harry Potter', 'Godfather', 'Lord of the Rings' ];

//let myFav1 = favMovies[0];
//let myFav2 = favMovies[1];
//let myFav3 = favMovies[2];

let [myFav1, ,myFav3] = favMovies

console.log(myFav1);
console.log(myFav3);


const numbers = [ -3, 10, 0, 100, 200 ];
// ten, zero, twoHundred

const [ , ten, zero, , twoHundred] = numbers 

console.log(ten);
console.log(zero);
console.log(twoHundred);