//1
function countPos(numbers) {
    return numbers.filter((number) => number > 0).length;
    }
    console.log(countPos([-45, 0, 0, 34, 5, 67]));
    console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
    console.log(countPos([0, -1, -2, -3]));

//2
function countA(str) {
    return str.split('').filter((string) => string.toLowerCase().includes ('a')).length
}

console.log(countA("TechGlobal is a QA bootcamp")); 
console.log(countA("QA stands for Quality Assurance")); 
console.log(countA("Cypress")); 

//3

function countVowels(str) {
    return str.split('').filter((letter) => 'AEOUIaeoui'.includes(letter)).length;
}
console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

//4

function countVowels(str) {
    return str.split('').filter((letter) => !'AEOUIaeoui'.includes(letter)).length;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

//5
function countWords(str) {
    wordCounter = 0;
    return str.split(' ').filter((wrd) => wrd.length > 0).length;
}

console.log(countWords("    Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));

//6

const factorial = num => {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1)
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(3))
console.log(factorial(0))
console.log(factorial(1))

//7
function isPalindrome(pali) {
    if (pali.toLowerCase === pali.toLowerCase().split('').reverse().join('')) {
        return true;
    }
    else return false;
}

console.log(isPalindrome('Hello'));
console.log(isPalindrome('kayak'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('civi'));

//8
function countMultipleWords(arr) {
    return arr.filter((str) => str.trim().split(' ').length > 1).length
}
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])); 
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])); 
console.log(countMultipleWords([ ]));

//9
function count3OrLess(str) {
    return str.split(' ').filter((str) => str.length <= 3).length 
}
console.log(count3OrLess('Hello'))
console.log(count3OrLess(''))

//10
function isPrime(num) {
    if(num <= 1) {
        return false;
    }
    else if (num === 2) {
        return true;
    }
    else if (num % 2 === 0) {
        return false;
    }
    for(let i = 3; i * i <= num; i+= 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true
    }



console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

//11

function add(arr1, arr2) {
    const length = Math.max (arr1.length + arr2.length)
    const array = []  


for(let i = 0; i < length; i++) {
    const val1 = i < arr1.length ? arr1[i] : 0;
    const val2 = i < arr2.length ? arr2[i] : 0;
    array.push(val1 + val2);
}
    return array;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));

//12
function removeExtraSpace(str) {
    return str.trim().split(' ').filter((word) => word !== '').join(' ');
}


console.log(removeExtraSpace('Hello'))
console.log(removeExtraSpace('      Hello   World'))
console.log(removeExtraSpace('Hello'))

//13
function findClosestTo10(arrNum) {
    return arrNum.filter((number) => number === 10)
}
console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));


//14

function isEmailValid (str) {
    if (str.includes(' ') || (str.indexOf('@') !== str.lastIndexOf('@') || !str.includes('@') || !str.includes('.'))) {
        return false;
    } 
    else {
        let beforeAt = str.slice(0, str.indexOf('@'))
        let afterAtBeforeDot = str.slice(str.indexOf('@') + 1, str.lastIndexOf('.'))
        let afterDot = str.slice(str.indexOf('@') + 1, str.lastIndexOf('.') + 1)

        return (beforeAt.length >= 2 && afterAtBeforeDot.length >= 2 && afterDot.length >= 2)
   }
}

console.log(isEmailValid(''))

//15
function isPasswordValid(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{8,16}$/;
    return regex.test(password);
 }

console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));
