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

//6

function removeStringSpecialsDigits(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (isNaN(char) && (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char === ' ')) {
            result += char;
        }
    }
    
    return result;
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"))   
console.log(removeStringSpecialsDigits("Cypress")) 
console.log(removeStringSpecialsDigits("Automation123#$%"))  

//7

function removeArraySpecialsDigits(arr) {
    const removeSpecialsAndDigits = (str) => {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ') {
                result += char;
            }
        }
        return result;
    };
    return arr.map(removeSpecialsAndDigits);
}

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));


//8
const getCommons = (arr1, arr2) => {
    return [...new Set(arr1.filter((word) => arr2.includes(word)))];
}

console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ));
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ));
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ))

//9
const noXInVariables = arr => {
    return arr.map(item => {
        if (typeof item === 'string') {
            let newItem = item.split('x').join('').split('X').join('');
            return newItem === '' ? null : newItem;
        }
        return item;
    })
        .filter(item => item !== null);
};

console.log(noXInVariables(["abc", 123, "#$%"]));
console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]));
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));