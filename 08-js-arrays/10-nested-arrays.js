const arr = [1, 2, [1, 2, 3, 4]];

console.log(arr.length); // 3
console.log(arr[2]); // [ 1, 2, 3, 4 ]
console.log(arr[2].length); // 4


const batch10Students = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

console.log(batch10Students); // [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7, 8, 9 ] ]

const newArr = batch10Students.flat()

console.log(batch10Students)
console.log(newArr)
console.log(newArr.length);


const arr1 = [ 1, [2, 3, [4, 5, [6]]]];

console.log(arr1.flat()); // [ 1, 2, 3, [ 4, 5, [ 6 ] ] ]
console.log(arr1.flat(1)); // [ 1, 2, 3, [ 4, 5, [ 6 ] ] ]
console.log(arr1.flat(2)); // [ 1, 2, 3, 4, 5, [ 6 ] ]
console.log(arr1.flat(3)); // [ 1, 2, 3, 4, 5, 6 ]


  