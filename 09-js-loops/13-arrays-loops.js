const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];

nums.slice(0, 3) 
nums.slice(-3) 

sum = 0
const firstLast3 = [...nums.slice(0, 3), ...nums.slice(-3)];

for(const num of firstLast3) {
    sum += num;
}

console.log(sum);