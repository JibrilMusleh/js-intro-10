const cities = ['Rome', 'Chicago', 'Miami', 'Berlin', 'Tokyo'];

//console.log(cities[0]);
//console.log(cities[1]);
//console.log(cities[2]);
//console.log(cities[3]);
//console.log(cities[4]);



for(let i = 0; i <= cities.length-1; i++) {
    console.log(cities[i])
}


// for...of loop

for(const city of cities) {
    console.log(city)
}

const numbers = [10, 20, 30, 40, 23];

for(const number of numbers) {
    console.log(number)
}

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

let index = 0
while(index <= numbers.length - 1) {
    console.log(numbers[index]);
    index++;
}