console.log(false || 'Hello'); // "Hello"

console.log(false ?? 'Hello'); // false
console.log(null ?? 'Hello'); // "Hello"
console.log(undefined ?? 'Hello'); // "Hello"

console.log(false ?? 'Hello'); // false
console.log('' ?? 'Hello'); // ''
console.log(NaN ?? 'Hello'); // NaN
console.log(0 ?? 'Hello'); // 0

console.log(false || 'Hello'); // 'Hello'
console.log('' ?? 'Hello'); // 'Hello'
console.log(NaN || 'Hello'); // 'Hello'
console.log(0 || 'Hello'); // 'Hello'



