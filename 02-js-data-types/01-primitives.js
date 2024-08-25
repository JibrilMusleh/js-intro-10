// string

let name = 'John';
console.log(name); // 'John'
console.log(typeof name); // string


// number
let num1 = 10; // whole number
let num2 = 3.14; // floating/decimal number

console.log(num1);
console.log(num2);

console.log(typeof num1, typeof num2);


// boolean: are used with if else conditions
let isRainy = false;
let isAuthenticated = true;

let result = '5' === 5;

let isUsernameCorrect = 'admin' === 'johndoe';

console.log(isRainy);
console.log(isAuthenticated);
console.log(result);
console.log(isUsernameCorrect);

console.log(typeof isAuthenticated);
console.log(typeof result);

// undefined vs null
let className1;
let className2 = undefined;


let courseName = null;

console.log(className1);
console.log(className2);
console.log(courseName);

console.log(typeof className1);
console.log(typeof className2);
console.log(typeof courseName);

// changing types
let address = 'Chicago';
console.log(typeof address);

address = 12345;
console.log(typeof address);

//bigint 

let n1 = 598431759081723126263762n;
let n2 = BigInt('598431759081723126263762');

console.log(n1)
console.log(n2)

console.log(typeof n1);
console.log(typeof n2);

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
c
let safeMaxInt = 9007199254740992n; // it is recommended to go with bigint
let safeMinInt = -900719925474099n; // it is recommended to go with bigint


// symbol
let s1 = Symbol('UA');
console.log(s1);
console.log(typeof s1);