const{getRandomNumber, CharacterHelper} = require('../utils/CharacterHelper.js')



//2
let n1 = 2;
let n2 = 4;
let n3 = 6;


console.log(n1 % 2 === 0 && n2 % 2 === 0 && n2 % 2 === 0   )


//3
let char = 'B';

if(CharacterHelper.isLetter(char)) console.log(`"${char}" is a Letter`);
if(CharacterHelper.isDigit(char)) console.log(`"${char}" is a digit`);
if(CharacterHelper.isSpecial(char)) console.log(`"${char}" is a Special Character`);
if(CharacterHelper.isSpace(char)) console.log(`"${char}"is a whitespace`);

//4

function hasBlue(str) {
    str = str.toLowerCase();
    return str.includes('blue');
}

console.log(hasBlue('fjiaoprwieuqhp Khfilhhef'));

//5

function startT(str) {
    str = str.toLowerCase();
    return str.includes('t');
}

console.log('techglobal')