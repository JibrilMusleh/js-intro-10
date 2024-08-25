const{getRandomNumber} = require('../utils/MathHelper.js')


let num1 = getRandomNumber(0, 1); 
let num2 = getRandomNumber(0, 1); 
console.log(num1, num2)

if (num1 === num2) {
    console.log('true')
}
else {
    console.log('false')
}




/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"


Test data 1:
"v"

Expected result 1:
"v" is a letter

Test data 2:
"5"

Expected result 2:
"5" is a digit

Test data 3:
"@"

Expected result 3:
INVALID INPUT
*/

let t2character = '8'; // 

let t2ASCII = t2character.charCodeAt(0); 

if(t2ASCII >= 48 && t2ASCII <= 57) {
    console.log(`"${t2character}" is a digit`);
}
else if ((t2ASCII >= 65 && t2ASCII <= 90) || (t2ASCII >= 97 && t2ASCII <= 122)) {
    console.log(`"${t2character}" is a letter`);
}
else {
    console.log('INVALID INPUT');
}


/*
Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1:
"a"

Expected result 1:
"a"  is a lowercase letter


Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is an uppercase letter


Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let t3character = 'a';

let t3ASCII = t3character.charCodeAt(0);

if(t3ASCII >= 65 && t3ASCII <= 90) {
    console.log(`"${t3character}" is a uppercase letter`)
}
else if(t3ASCII >= 97 && t3ASCII <= 122) {
    console.log(`"${t3character}" is a lowercase letter`)
}
else {
    console.log('INVALID INPUT')
}

/*
Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.

Test data 1:
"a"

Expected result 1:
"a"  is not a special character


Test data 2:
"5"

Expected result 2:
"5" is not a special character


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is not a special character
*/

let t4character = '<';

let t4ASCII = t4character.charCodeAt(0);

if((t4ASCII >= 65 && t4ASCII <= 90) || (t4ASCII >= 97 && t4ASCII <= 122) || (t4ASCII >= 48 && t4ASCII <= 57) || t4ASCII === 32) {
    console.log(`"${t4character}" is not a special character`);
}
else {
    console.log(`"${t4character}" is a special character`);
}

/*
Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a" is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N" is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let t5character = 'E';

let t5ASCII = t5character.charCodeAt(0);

if((t5ASCII >= 65 && t5ASCII <= 90) || (t5ASCII >= 97 && t5ASCII <= 122)) {
    t5character = t5character.toLowerCase();
    if (t5character === 'a' || t5character === 'e' || t5character === 'i' || t5character === 'o' || t5character === 'u') {
        console.log(`"${t5character}" is a vowel`);
    }
    else {
        console.log(`"${t5character}" is not a vowel`);
    }
}
else {
    console.log("INVALID INPUT");
}



/*Area of a rectangle 
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Area = x * y 
 
Examples: 
rectangleArea(5, 4)   -> 20 
rectangleArea(3, 7)   -> 21 
rectangleArea(6, 10)   -> 60
*/

function rectangleArea(x, y) {
    return x * y;
}

console.log(rectangleArea(5, 4))
console.log(rectangleArea(10, 7))
console.log(rectangleArea(6, 10))

function rectanglePerimeter(x, y) {
    return 2 *(x + y)
}

console.log(rectanglePerimeter(5, 4))

function squareArea(x, y) {
    return (x * x)
}

console.log(squareArea(5))

function squarePerimiter(x, y) {
    return (4 * x)
}

console.log(squarePerimiter(5))


function firstCharacter(str) {
    return str[0]
}

console.log(firstCharacter('Tech'))


function firstTwoCharacter(str) {
    return str.substring(0, 2)
}

console.log(lastTwoCharacter('Tech'))

function lastTwoCharacter(str) {
    return str [0] + str.slice [-1]
}


function concat(word1, word2) {
    return `"${word1}${word2}"`
}
console.log(concat('Tech', 'Global'))