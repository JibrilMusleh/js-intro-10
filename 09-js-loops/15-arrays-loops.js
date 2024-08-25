const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];

const newArr = a1.concat(a2, a3);

newArr.sort((a, b) => b - a);

console.log(newArr);

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];

const arr3 = [];

arr3[0] = arr1[0] * arr2[0];
arr3[1] = arr1[1] * arr2[1];

for(let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i] * arr2[i];
}
console.log(arr3)