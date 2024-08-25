/*Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is even, print true.
Otherwise, print false.
Examples:
1 -> false 2 -> true 5 -> false 10 -> true
*/

let ranNum = Math.floor(Math.random() * 10) + 1
console.log(ranNum);
console.log(ranNum % 2 === 0);

/*
Find if a number is odd or not.
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is odd, print true.
Otherwise, print false.
Examples:
1 -> true 2 -> false 5 -> true 10 -> false
*/
let ranNum1 = Math.floor(Math.random() * 10) + 1;
console.log(ranNum1);
console.log(ranNum1 % 2 !== 0);

/*
Find if a number is positive or not.
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is positive, print true.
Otherwise, print false.
Examples:
-5 -> false -1 -> false 0 -> false 1 -> true 5 -> true
*/

let ranNum2 = Math.floor(Math.random() * 11) - 5;
console.log(ranNum2);
console.log(ranNum2 > 0);

/*
Find if a number is negative or not.
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is negative, print true.
Otherwise, print false.
Examples:
-5 -> true -1 -> true 0 -> false 1 -> false 5 -> false
*/
let ranNum3 = Math.floor(Math.random() * 11) - 5;
console.log(ranNum3);
console.log(ranNum3 < 0);

/*
Find if a number is divisible by 5 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). If the random number is divisible by 5, print true.
Otherwise, print false.
Examples:
1 -> false 5 -> true 20 -> true 37 -> false 50 -> true
*/
let ran = Math.floor(Math.random() * 50) + 1;
console.log(ran);
console.log(ran % 5 === 0);

/*
Find if a number is divisible by 7 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). If the random number is divisible by 7, print true.
Otherwise, print false.
Examples:
1 -> false 7 -> true 35 -> true 49 -> true 50 -> false
*/
let ran1 = Math.floor(Math.random() * 50) + 1;
console.log(ran1);
console.log(ran1 % 7 === 0);

/*
Calculate the sum of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the sum of the numbers and print it.
Examples: 
3,5 ->8 
7,3 ->10
5,5 ->10
1, 10 -> 11
10, 1 -> 11
*/
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

console.log(randomNum1, randomNum2);

console.log(randomNum1 + randomNum2);

/*
Calculate the absolute difference between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the absolute difference of the numbers and print it.
Examples:
3,5 ->2 
7,3 ->4 
5,5 ->0 
1,10 ->9 
10,1 ->9
*/

let randomNum3 = Math.floor(Math.random() * 10) + 1;
let randomNum4 = Math.floor(Math.random() * 10) + 1;

console.log(randomNum3, randomNum4);

console.log(Math.abs(randomNum3 - randomNum4));

/*
Calculate the product of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Calculate the product of the numbers and print it.
Examples: 
3,5  -> 15
7,3 ->21
5,5 ->25
1, 10   ->10
10, 1   -> 10
*/

let ran3 = Math.floor(Math.random() * 10) + 1;
let ran4 = Math.floor(Math.random() * 10) + 1;

console.log(ran3, ran4);
console.log(ran3 * ran4);

/*
Calculate the square of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). Calculate the square of the number and print it.
Examples:
1 ->1
2 ->4
5 ->25 
10 -> 100
*/

let ran5 = Math.floor(Math.random() * 10) + 1;

console.log(ran5);
console.log(ran5 ** 2);

/*
Calculate the cube of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). Calculate the cube of the number and print it.
Examples:
1 ->1
2 ->8
5 ->125 
10 -> 1000
*/

let ran6 = Math.floor(Math.random() * 10) + 1;
console.log(ran6);
console.log(ran6 ** 3);

/*
Convert miles to kilometers.
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
Examples:
1 ->1.6 
2 ->3.2 
5 ->8
*/

let miles = Math.floor(Math.random() * 10) + 1;

let milesToKilometers = 1.6;

console.log(miles);

console.log(miles * milesToKilometers);

/*
Convert kilograms to pounds.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as a kilogram unit.
Convert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds.
Examples:
1 ->2.2 
20 ->44 
75 -> 165 
100 -> 220
*/
let kilograms = Math.floor(Math.random() * 100) + 1;

let kilogramsToPounds = 2.2;

console.log('kilograms is =', kilograms);
console.log('kilograms to pounds is =', kilograms * kilogramsToPounds);

/*
Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). If the numbers are equal, print true.
Otherwise, print false.
Examples:
1,1 -> true
1,2 -> false
2,3 -> false 
2,2 -> true 
3,3 -> false
*/
let ranNum1_1_3 = Math.floor(Math.random() * 3) + 1;
let ranNum2_1_3 = Math.floor(Math.random() * 3) + 1;

console.log(ranNum1_1_3, ranNum2_1_3);
console.log(ranNum1_1_3 === ranNum2_1_3);

/*
Find if an age is allowed to get Driver License or not.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
Examples:
1 -> false 
15 -> false 
16 -> true 
45 -> true 
100 -> true
*/
let ranNum1_100 = Math.floor(Math.random() * 100) + 1;

console.log(ranNum1_100);
console.log(ranNum1_100 >= 16);

/*
Find the greatest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Find the greatest of the numbers and print it.
Examples: 
3,5 --> 5
7,3 --> 7
5,5 --> 5
1,10 --> 10
10,1 --> 10
*/

let ranNum1_1_10 = Math.floor(Math.random() * 10) + 1;
let ranNum2_1_10 = Math.floor(Math.random() * 10) + 1;

console.log(ranNum1_1_10, ranNum2_1_10);
console.log(Math.max(ranNum1_1_10, ranNum2_1_10));

/*
Find the greatest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Find the greatest of the numbers and print it.
Examples:
3,5,2 ->5 
7,3,1 ->7 
5,5,5 ->5 
1,10,9 ->10 
10,1,2 ->10
*/

let ranNum3_1_10 = Math.floor(Math.random() * 10) + 1;
let ranNum4_1_10 = Math.floor(Math.random() * 10) + 1;
let ranNum5_1_10 = Math.floor(Math.random() * 10) + 1;

console.log(ranNum3_1_10, ranNum4_1_10, ranNum5_1_10);
console.log(Math.max(ranNum3_1_10, ranNum4_1_10, ranNum5_1_10));

/*
Find the smallest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). Find the smallest of the numbers and print it.
Examples:
3,5 ->3 
7,3 ->3 
5,5 ->5 
1,10 ->1 
10,1 ->1
*/
let ran_num1 = Math.floor(Math.random() * 10) + 1;
let ran_num2 = Math.floor(Math.random() * 10) + 1;

console.log(ran_num1, ran_num2);
console.log(Math.min(ran_num1, ran_num2));

/*
Find the smallest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Find the smallest of the numbers and print it.
Examples:
3,5,2 ->2 
7,3,1 ->1 
5,5,5 ->5 
1,10,9 ->1 
10,1,2 ->1
*/
let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;
let random3 = Math.floor(Math.random() * 10) + 1;
console.log(random1, random2, random3);
console.log(Math.min(random1, random2, random3));

/*
Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). Calculate the average of the numbers and print it.
Examples:
3,5,7 ->5 
7,3,2 ->4 
5,5,5 ->5 
1,10,7 ->6 
10,1,1 ->4
*/

let random4 = Math.floor(Math.random() * 10) + 1;
let random5 = Math.floor(Math.random() * 10) + 1;
let random6 = Math.floor(Math.random() * 10) + 1;

console.log(random4, random5, random6);
console.log((random4 + random5 + random6) / 3);

/*
Area of a rectangle 
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
console.log(rectangleArea(5, 4));
console.log(rectangleArea(10, 7));
console.log(rectangleArea(6, 10));

/*
Perimeter of a rectangle. 
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when 
invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Perimeter = 2 * (x + y) 
 
Examples: 
rectanglePerimeter(5, 4)   -> 18 
rectanglePerimeter(3, 7)   -> 20 
rectanglePerimeter(6, 10)   -> 32 
*/

function rectanglePerimeter(x, y) {
    return 2 * (x + y);
}
console.log(rectanglePerimeter(5, 4));
console.log(rectanglePerimeter(3, 7));
console.log(rectanglePerimeter(6, 10));

/*
Area of a square 
Write a function named as squareArea() which calculates the area of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula:Area = x * x 
 
Examples: 
squareArea(5)   -> 25 
squareArea(3)   -> 9 
squareArea(6)   -> 36
*/

function squareArea(x) {
    return x * x;
}

console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));

/*
Perimeter of a square. 
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula: Perimeter = 4 * x 
 
Examples: 
squarePerimeter(5)   -> 20 
squarePerimeter(3)   -> 12 
squarePerimeter(6)   -> 24
*/

function squarePerimeter(x) {
    return 4 * x;
}
console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));

/*
Double The Word 
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
doubleWord("Tech")    -> "TechTech" 
doubleWord("Global")     -> "GlobalGlobal" 
*/

function doubleWord(word) {
    return word + word;
}
console.log(doubleWord("Tech"));
console.log(doubleWord("Global"));

/*
First Character 
Write a function named as firstCharacter() which takes a string word as an argument and returns the 
first character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
firstCharacter("Tech")    -> "T" 
firstCharacter("Global")   -> "G" 
*/

function firstCharacter(str) {
    return str[0]
}

console.log(firstCharacter("Tech"));
console.log(firstCharacter("Global"));

/*
First Two Characters 
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the given string back. 
 
Examples: 
firstTwoCharacters("Tech")    -> "Te" 
firstTwoCharacters("Global")     -> "Gl" 
firstTwoCharacters("")      -> "" 
firstTwoCharacters(" ")      -> " " 
firstTwoCharacters("1")     -> "1"
*/

function firstTwoCharacters(word) {
    return word.substring(0, 2);
}

console.log(firstTwoCharacters("Tech"));
console.log(firstTwoCharacters("Global"));
console.log(firstTwoCharacters(""));
console.log(firstTwoCharacters(" "));
console.log(firstTwoCharacters("1"));

/*
Last Character 
Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
lastCharacter("Tech")    -> "h" 
lastCharacter("Global")    -> "l" 
lastCharacter(" ")    -> " " 
lastCharacter("123")     -> "3"
*/

function lastCharacter(str) {
    return str.slice(-1);
}
console.log(lastCharacter("Tech"));
console.log(lastCharacter("Global"));
console.log(lastCharacter(" "));
console.log(lastCharacter("123"));

/*
Last Two Characters 
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
lastTwoCharacters("Tech")  -> "ch" 
lastTwoCharacters("Global")   -> "al" 
lastTwoCharacters("")    -> "" 
lastTwoCharacters(" ")    -> " " 
lastTwoCharacters("1")    -> "1
*/

function lastTwoCharacters(word) {
    return word.slice(-2);
}
console.log(lastTwoCharacters("Tech"));
console.log(lastTwoCharacters("Global"));
console.log(lastTwoCharacters(" "));
console.log(lastTwoCharacters("123"));

/*
characters 
Write a function named as firstLast() which takes a string word as an argument and returns the first and 
the last characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
firstLast("Tech")    -> "Th" 
firstLast("TechGlobal")     -> "Tl" 
firstLast("")      -> "" 
firstLast(" ")      -> " " 
firstLast("1")       -> "1" 
firstLast("abcde")     -> ae
*/

function firstLast(word) {
    if (word.length < 2) {
        return word;
    }
    else return word[0] + word.slice(- 1);
}
console.log(firstLast("Tech"));
console.log(firstLast("TechGlobal"));
console.log(firstLast(""));
console.log(firstLast(" "));
console.log(firstLast("1"));
console.log(firstLast("abcde"));

/*
Has Five 
Write a function named as hasFive() which takes a string word as an argument and returns true if given 
string has at least 5 characters, and false otherwise when invoked. 
 
Examples: 
hasFive("Tech")   -> false 
hasFive("Global")   -> true 
hasFive("")    -> false 
hasFive("12345")   -> true 
hasFive("hello")   -> true
*/

function hasFive(word) {
    return word.length >= 5;
}
console.log(hasFive("Tech"));
console.log(hasFive("Global"));
console.log(hasFive(""));
console.log(hasFive("12345"));
console.log(hasFive("hello"));

/*
Middle 
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked. 
NOTE: If the given word is empty, then return the empty string back. 
 
Examples: 
middle("Tech")    -> "ec" 
middle("Global")   -> "ob" 
middle("abcde")   -> "c" 
middle("1")     -> "1" 
middle("abc")     -> "b" 
middle("1234")    -> "23"
*/

function middle(word) {
    if (word % 2 !== 0) {
        return word.substring;
    }
    else if (word % 2 === 0) {
        return 
    }
}

/*
Longer String 
Write a function named as longer() which takes two string words as arguments and returns the string 
that has more characters when invoked. 
NOTE: If both of the words have the same length, then return the first string. 
 
Examples: 
longer("Tech", "Global")  -> "Global" 
longer("Hello", "Hi")    -> "Hello" 
longer("Hello", "World")  -> "Hello"
*/

function longer(word1, word2) {
    if (word1.length >= word2.length) {
        return word1;
    }
    else if (word1.length < word2.length) {
        return word2;
    }
}
console.log(longer("Tech", "Global"));
console.log(longer("Hello", "Hi"));
console.log(longer("Hello", "World"));

/*
Shorter String 
Write a function named as shorter() which takes two String words as arguments and returns the String 
has less characters when invoked. 
NOTE: if both of the words have the same length, then return the second String. 
 
Examples: 
shorter("Tech", "Global")  -> "Tech" 
shorter("Hello", "Hi")    -> "Hi" 
shorter("Hello", "World")  -> "World"
*/

function shorter(word1, word2) {
    if (word1.length >= word2.length) {
        return word2;
    }
    else if (word1.length < word2.length) {
        return word1;
    }
}
console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "World"));

/*
Concat Two String 
Write a function named as concat() which takes two string words as arguments and returns the words 
concatenated when invoked. 
NOTE: Concatenation should always be as first string + second string .  
 
Examples: 
concat("Tech", "Global")  -> "TechGlobal" 
concat("Hello", "World")  -> "HelloWorld" 
concat("", "abc")    -> "abc" 
concat("123", "1234")    -> "1231234"
*/
function concat(word1, word2) {
    return `"${word1}${word2}"`;
}
console.log(concat("Tech", "Global"));
console.log(concat("Hello", "World"));
console.log(concat("", "abc"));
console.log(concat("123", "1234"));

// Write your solution below
function firstTwoCharacters(word) {
    if (word > 2) {
        return word
    }
    return word.slice(0, 2);
    }
    
    console.log(firstTwoCharacters("1"));




let num6 = Math.floor(Math.random() * 10 ) + 1
let num7 = Math.floor(Math.random() * 10 ) + 1
let num8 = Math.floor(Math.random() * 10 ) + 1



let randNum1 = Math.floor(Math.random() * 10) + 1
let randNum2 = Math.floor(Math.random() * 10) + 1
let randNum3 = Math.floor(Math.random() * 10) + 1

console.log(randNum1, randNum2, randNum3);
console.log(Math.max(randNum1, randNum2, randNum3));