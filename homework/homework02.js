console.log('\n---------------Task01-------------\n');
let str1 = '5' , str2 = '2'

let num1 = Number(str1)
let num2 = Number(str2)

let sum = num1 + num2
let sum1 = num1 * num2
let sum2 = num1 / num2
let sum3 = num1 - num2
let sum4 = num1 % num2
let sum5 = num1 ** num2

console.log(`The sum of ${num1} and ${num2} = ${sum}`);
console.log(`The product of ${num1} and ${num2} = ${sum1}`);
console.log(`The division of ${num1} and ${num2} = ${sum2}`);
console.log(`The subtraction of ${num1} and ${num2} = ${sum3}`);
console.log(`The remainder of ${num1} and ${num2} = ${sum4}`);
console.log(`The exponentiation of ${num1} and ${num2} = ${sum5}`);

console.log('\n---------------Task02-------------\n');

let s1 = '200', s2 = '-50'

let sn1 = Number(s1), sn2 = Number(s2)
let ave = sn1 + sn2

console.log('The greatest value is = ' + (Math.max(s1, s2)))
console.log('The smallest value is = ' +(Math.min(s1, s2)))
console.log('The average is = ' + (ave / 2)) 
console.log('The absolute difference is = ' + (Math.abs(s1 - s2))) 

console.log('\n---------------Task03-------------\n');

let rannum1 = Math.ceil(Math.random() * 50) + 1;
let rannum2 = Math.ceil(Math.random() * 50) + 1;

console.log(rannum1);
console.log(rannum2);

console.log(`The absolute difference between number is = ${Math.abs(rannum1 - rannum2)}`);

console.log('\n---------------Task04-------------\n');
let ranNum1 = Math.floor(Math.random() * 50) + 1;
let ranNum2 = Math.floor(Math.random() * 50) + 1;
let ranNum3 = Math.floor(Math.random() * 50) + 1;
let ranNum4 = Math.floor(Math.random() * 50) + 1;
let ranNum5 = Math.floor(Math.random() * 50) + 1;

let max = (Math.max(ranNum1, ranNum2, ranNum3, ranNum4, ranNum5))
let mix = (Math.mix(ranNum1, ranNum2, ranNum3, ranNum4, ranNum5))

console.log(ranNum1, ranNum2, ranNum3, ranNum4, ranNum5)

console.log(`The max value = ${max}`)
console.log(`The min value = ${min}`)

console.log('\n---------------Task05-------------\n');
let ranNumber1 = Math.floor (Math.random() * (51)) + 50;
let ranNumber2 = Math.floor (Math.random() * (51)) + 50;
let ranNumber3 = Math.floor (Math.random() * (51)) + 50;

console.log(`The number 1 = ${ranNumber1}`)
console.log(`The number 2 = ${ranNumber2}`)
console.log(`The number 3 = ${ranNumber3}`)

console.log(`The sumber of the number is = ${ranNumber1 + ranNumber2 + ranNumber3}`)

console.log('\n---------------Task06-------------\n');

let r1 = Math.floor ( Math.random() * (100)) + 1 
let r2 = Math.floor ( Math.random() * (100)) + 1 
let r3 = Math.floor ( Math.random() * (100)) + 1 

console.log((r1 > 25) && (r2 > 25) && (r3 > 25));

console.log('\n---------------Task07-------------\n');

let person = 'Selwadi';

console.log(`
    The length of the name is = ${person.length}
    The first character in the name is = ${person[0]}
    The last character in the name is = ${person[person.length -1]}
    The first 3 characters in the name are = ${person.slice(0, 3)}
    The last 3 characters in the name are = ${person.slice(-3)}
    `);





