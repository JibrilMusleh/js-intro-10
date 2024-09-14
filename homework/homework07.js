//1
const hasUpperCase = str => {
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') return true;
    }
    return false;
}

console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""))

//2
function noDigit(str) {
    return str.split('').filter(char => !(char >= '0' && char <= '9')).join('')
}

console.log(noDigit(''))

//3
const noVowel = str => {
    return str.split('').filter((char) => !'AEIOUaeiou'.includes(char)).join('')
}
console.log(noVowel('TechGlobal'))

//4
const no13 = arr => {
    return arr.map((num) => num === 13 ? 0: num)
}

console.log(no13([13, 13, 13, 13]))

//5
const middleInt = (num1, num2, num3) => {
    const numbers = [num1, num2, num3]
    numbers.sort((a, b) => b - a);
    return numbers[1]

}
 

console.log(middleInt(1, 2, 2)) 
console.log(middleInt(5, 5, 8)) 
console.log(middleInt(5, 3, 5)) 
console.log(middleInt(1, 1, 1)) 
console.log(middleInt(-1, 25, 10))  

//6
const sumOfDigits = (str) => {
    let sum = 0;
    for(const char of str) {
        if( char >= '0' && char <= '9') sum += Number(char);
    }
    return sum
} 

console.log(sumOfDigits("Javascript")) 
console.log(sumOfDigits("John’s age is 29"))  
console.log(sumOfDigits("$125.0")) 
console.log(sumOfDigits("")) 

//7
const arrFactorial = arr => {
    return arr.map((num) => {
        let result = 1
        for(let i = 1; i <= num; i++) {
            result *= i;
        }
        return result
    })
}

console.log(arrFactorial([1, 2, 3 ,4]))  
console.log(arrFactorial([0, 5])) 
console.log(arrFactorial([5 , 0, 6]))  
console.log(arrFactorial([]))

//8

// Write a function named categorizeCharacters() which takes a string word as 
// argument and return an array as letters at index of 0, digits at index of 1 and 
// specials at index of 2. 

// Examples:
// categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
// categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
// categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]

const categorizeCharacters = str => {
    let letters = '';
    let digits = '';
    let specials = '';

    for(const char of str) {
        if(char >= '0' && char <= '9') digits += char;
        if(char >= 'a' && char <= 'z') letters += char;
        else specials += char
    }
    return [letters, digits, specials];
}

console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%"));
console.log(categorizeCharacters("12ab$%3c%"));
