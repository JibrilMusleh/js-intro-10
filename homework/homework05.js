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
function countVowel(str) {
    return str.split('').filter((word) => word.toLowerCase().includes('a') || word.includes('e') || word.includes('i') || word.includes('o') || word.includes('u')).length;
}

console.log(countVowel('Hello'));
console.log(countVowel('Hello World'));
console.log(countVowel('JavaScript is fun'));
console.log(countVowel(''));

//4
function countVowel(str) {
    return str.split('').filter((word) => word.toLowerCase().includes('a') || word.includes('e') || word.includes('i') || word.includes('o') || word.includes('u')).length;
}

console.log(countVowel('Hello'));
console.log(countVowel('Hello World'));
console.log(countVowel('JavaScript is fun'));
console.log(countVowel(''));
