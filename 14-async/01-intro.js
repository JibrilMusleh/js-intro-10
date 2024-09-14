// synchronus code
console.log('1')
console.log('2')
console.log('3')

for(let i = 5; i <= 10; i++) {
    console.log(i)
}

setTimeout(() => {
    console.log('A');
}, 2000);

setTimeout(() => {
    console.log('B');
}, 1000);

setTimeout(() => {
    console.log('C');
}, 1500);

// B,C,A