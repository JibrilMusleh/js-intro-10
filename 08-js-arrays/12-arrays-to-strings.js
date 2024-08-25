const names = ['alex', 'james', 'jane'];

let namesString1 = names.toString();

console.log(names);
console.log(namesString1);


console.log(names.length)
console.log(namesString1.length);

let namesString2 = names.join();
let namesString3 = names.join(' ');
let namesString4 = names.join(' - ');

console.log(namesString2);
console.log(namesString3);
console.log(namesString4);