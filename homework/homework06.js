//1 
const noSpace = (str) => str.split(' ').join('')

console.log(noSpace(''))

//2
const replaceFirstLast = str => {
    str = str.trim()
    if (str.length < 2) {
        return '';
    }
    else return str.slice(-1) + str.slice(1, -1) + str[0];
}

console.log(replaceFirstLast("Hello"))

//3
const hasVowel = str => {
  for(let char of str) {
    if('AEIOUaeiou'.includes(char))
        return true;
  }
  return false;
}

console.log(hasVowel(''))
console.log(hasVowel('JavaScript'))
console.log(hasVowel('Tech Global'))
console.log(hasVowel('1234'))
console.log(hasVowel('ABC'))

//4
const checkAge = num => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - num;

    if (num > currentYear) {
        return 'AGE IS NOT VALID';
    }
    else if (age > 120){
        return 'AGE IS NOT VALID';
    }
    else if (age < 16) {
        return 'AGE IS NOT ALLOWED';
    }
    else return 'AGE IS ALLOWED'
}

console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));

//5
const averageOfEdges = (num1, num2, num3) => {
    const min = Math.min(num1, num2, num3);
    const max = Math.max(num1, num2, num3);
    return (min + max) / 2;
  }
  
  console.log(averageOfEdges(0, 0, 0));
  console.log(averageOfEdges(0, 0, 6));
  console.log(averageOfEdges(-2, -2, 10));
  console.log(averageOfEdges(-3, 15, -3));
  console.log(averageOfEdges(10, 13, 20));

  //6
  const noA = (arr) => {
    return arr.map((word) => word.startsWith('A') || word.startsWith('a') ? '###' : word)
  }

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

//7
const no3and5 = (arr) => {
    return arr.map((num) => {
       if (num % 3 === 0 && num % 5 === 0) {
           return 101;
       }
       else if (num % 5 === 0){
           return 99;
       }
       else if (num % 3 === 0){
           return 100;
       }
       else return num;
    })
}
console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

//8


//9

const removeDuplicates = arr => {
    return [...new Set(arr)]; 
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));

//10

const isDateFormatValid = arr = {

}

//11
const secondMax = arr => {
    if (arr.length === 1) return arr[0];

    const removeDup = [...new Set(arr)]

    removeDup.sort((a, b) => b - a);

    return removeDup[1];
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]))


//12
const secondMin = arr => {
    if (arr.length === 1) return arr[0];

    const removeDup = [...new Set(arr)]

    removeDup.sort((a, b) => a - b);

    return removeDup[1];
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6]));
console.log(secondMin([10]))

//13
const mostRepeated = arr => {
    return arr.sort((a, b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length).pop();
  }
  
console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));
console.log(mostRepeated([10]));
console.log(mostRepeated(["TechGlobal"]));