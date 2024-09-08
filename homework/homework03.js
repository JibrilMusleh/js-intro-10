const{getRandomNumber} = require('../utils/MathHelper.js')

console.log('\n----------TASK01----------\n');

/*
Requirement:
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.
Test data 1:
20, 70, 25
Expected Output 1: false

Test data 2:
65, 80, 90

Expected Output 2: true
*/

let r1 = getRandomNumber(1, 100);
let r2 = getRandomNumber(1, 100);
let r3 = getRandomNumber(1, 100);

let average = ((r1 + r2 + r3) / 3);

if (average >= 50) console.log(true);
else console.log(false);

console.log('\n----------TASK02----------\n');

/*
Requirement:
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

-If all numbers are different, then print "NO MATCH"
-If any of those 2 numbers are equal, then print "DOUBLE MATCH"
-If all 3 numbers are equal, then print "TRIPLE MATCH"
Test data 1:
3, 3, 3
Expected Output 1: TRIPLE MATCH

Test data 2:
1, 3, 3
Expected Output 2: DOUBLE MATCH

Test data 3:
1, 2, 3
Expected Output 3: NO MATCH

Test data 4:
1, 1, 2
Expected Output 4: DOUBLE MATCH
*/

let ranNum1 = getRandomNumber(1, 3);
let ranNum2 = getRandomNumber(1, 3);
let ranNum3 = getRandomNumber(1, 3);

console.log('Random numbers is =', ranNum1, ranNum2, ranNum3);

if (ranNum1 === ranNum2 && ranNum2 === ranNum3) console.log('TRIPLE MATCH');
else if (ranNum1 === ranNum2 || ranNum1 === ranNum3 || ranNum2 === ranNum3) console.log('DOUBLE MATCH');
else console.log('NO MATCH');

console.log('\n----------TASK03----------\n');

/*
Requirement:
Write a function named as hasA() which takes a string word as an argument
and returns true if given string has a character "a" or "A", and false otherwise when invoked.

NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech") 	-> false
hasA("Global") 	-> true
hasA("") 		-> false
hasA("Apple") 	-> true
*/

function hasA(word) {
    if (word.includes('a') || word.includes('A')) {
        return true
    }
    else {
        return false
    }
}

console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));
console.log(hasA("Yousef"));
console.log(hasA("Alselwadi"));

console.log('\n----------TASK04----------\n');

/*
Requirement:
Write a function named as doubleOrTripleWord() which takes a string word as an argument
and returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.

Examples:
doubleOrTripleWord("Tech") 	-> "TechTechTech"
doubleOrTripleWord("Apple") -> "AppleApple"
doubleOrTripleWord("") 		-> ""
doubleOrTripleWord(" ") 	-> " "
doubleOrTripleWord("1") 	-> "11"
doubleOrTripleWord("22") 	-> "222222"
*/

function doubleOrTripleWord(word) {
    if (word.length % 2 === 0) {
        return word.repeat(3);
    }
    else {
        return word.repeat(2);
    }
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

console.log('\n----------TASK05----------\n');

/*
Requirement:
Write a function named as firstWord() which takes a string word as an argument
and returns the first word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World") 		-> "Hello"
firstWord("I like JavaScript") 	-> "I"
firstWord("Hello") 		-> "Hello"
firstWord("") 		-> ""
firstWord("    ") 		-> ""
*/

function firstWord(word) {
    return word.split(' ')[0]
}

console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(" "));
console.log(firstWord(""));


console.log('\n----------TASK06----------\n');

/*
Requirement:
Write a function named as lastWord() which takes a string word as an 
argument and returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
lastWord("Hello World") 		-> "World"
lastWord("I like JavaScript") 	-> "JavaScript"
lastWord("Hello") 		-> "Hello"
lastWord("") 		-> ""
lastWord("    ") 		-> ""
*/

function lastWord() {

}

console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log("");
console.log("   ");

console.log('\n----------TASK07----------\n');

/*
Requirement: 
Write a function named as firstlastWord() which takes a string word as an argument 
and returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World") 	-> "HelloWorld"
firstLastWord("I like JavaScript") 	-> "IJavaScript"
firstLastWord("Hello") 		-> "HelloHello"
firstLastWord("") 		-> ""
firstLastWord("    ") 		-> ""
*/

function firstlastWord() {

}

console.log('\n----------TASK08----------\n');

/*
Requirement:
Write a function named as startVowel() which takes a string word as an argument
and returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello") 	-> false
startVowel("Apple") 	-> true
startVowel("orange") 	-> true
startVowel("") 	-> false
startVowel("    ") 	-> false
startVowel("123") 	-> false
*/

function startVowel(word) {
    
    if (word.startsWith('a') || word.startsWith('e') || word.startsWith('i') || word.startsWith('o') || word.startsWith('u') 
    || word.startsWith('A') || word.startsWith('E') || word.startsWith('I') || word.startsWith('O') || word.startsWith('U')) {
        return true
    }
    else return false
}


console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel("   "));
console.log(startVowel("123"));

console.log('\n----------TASK09----------\n');























