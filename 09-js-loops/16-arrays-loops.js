const nums = [-1, 1, 3, 0, 2, 6, 8];

let firstEven;

for(const num of nums) {
    if(num % 2 === 0) {
        firstEven = num;
        break;
    }
}

console.log(firstEven);


const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo']

let firstODDLengthCity;

for(const city of cities) {
    if(city.length % 2 !== 0) {firstODDLengthCity = city;
    break;
}
}

console.log(firstODDLengthCity);

const citieswithLength60rMore = []

console.log(cities.filter(city => city.length > 5));
