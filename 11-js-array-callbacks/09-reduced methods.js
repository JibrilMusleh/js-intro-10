const numbers = [ 4, 10, 3, 0, -2, -5, 1 ];
// Count evens = 4

let evenNumber = numbers.reduce((acc, curr) => {
    if(curr % 2 === 0) return acc + 1;
    return acc 
}, 0)
console.log(evenNumber);


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3

let getApple = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().indexOf('apple') >= 0) return acc + 1;
    return acc 
}, 0)
console.log(getApple);


let getI = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().indexOf('i') >= 0) return acc + 1;
    return acc 
}, 0)
console.log(getI);


let endWithE = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().endsWith('e')) return acc + 1;
    return acc 
}, 0)
console.log(endWithE);


function max(arr) {
    return Math.max(...arr);
}

console.log(max([0, 3, -9, 5, 8]))
console.log(max([-2, 0, -7, 10, -5]))

let sumArr = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
  ].map((arr) => {
    return arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0)
  })
  // [6, 35, 300]
  console.log(sumArr)