//1
function hasLowerCase(str) {
    for (let char of str) {
        if (char >= 'a' && char <= 'z')
            return true;
    }
    return false;
}

console.log(hasLowerCase(""))  
console.log(hasLowerCase("JAVASCRIPT"))  
console.log(hasLowerCase("hello")) 
console.log(hasLowerCase("125$"))  
console.log(hasLowerCase("   a   ")) 

//2
const noZero = arr => {
    return arr.filter(num => num !== 0);
}
console.log(noZero([1]));
console.log(noZero( [1, 1, 10] ));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100, 0]));



//3
const numberAndSquare = arr => arr.map(num => [num, num * num])


console.log(numberAndSquare([1, 2, 3]))
console.log(numberAndSquare([0, 3, -6])) 
console.log(numberAndSquare([1, 4]))
console.log(numberAndSquare([0, 0, 0]))
console.log(numberAndSquare([0, 1, -10]))

//4
function containsValue(arr, str) {
return arr.includes(str)
}


console.log(containsValue(["abc", "foo", "javascript"], "hello")) 
console.log(containsValue(["abc", "def", "123"], "Abc")) 
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"))

//5

function reverseSentence(str) {
    return  str.split(' ').reverse().join(' ')
}

console.log(reverseSentence("Hello"))
console.log(reverseSentence("Javascript is fun"))
console.log(reverseSentence("This is a sentence"))