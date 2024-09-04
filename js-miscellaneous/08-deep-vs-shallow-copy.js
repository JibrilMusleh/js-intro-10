const groups1 = [
    'John',
    ['Alex', 'Mariia'],
    ['John', 'Jane']
];

const groups2 = [...groups1];

console.log(groups1)
console.log(groups2)

groups1[1].pop();

console.log(groups1)
console.log(groups2)

