let fname = 'John';
let lname = 'Doe';

let fullname1 = fname + ' ' + lname;
let fullname2 = `${fname} ${lname}`;
let fullname3 = fname.concat(' ').concat(lname);

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);

/*
concat() function
TASK: cobines 2 strings together
RETURN: it always returns a new string
ARGUMENTS: takes a string as an argument - paramater
CHANGE ORGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static
*/

console.log('Hello'.concat(', ', 'Batch-10'));

