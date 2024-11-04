// 1

const makeNegative = num => {
    return num > 0 ? -num : num;
}

console.log(makeNegative(10))       
console.log(makeNegative( -7))      
console.log(makeNegative( 0))        
console.log(makeNegative(0.45))    

//2

const isSumEvenOrOdd = (num1, num2, num3) => {
    if((num1 + num2 + num3) % 2 === 0) return 'even'
    else return 'odd' 
}

console.log(isSumEvenOrOdd(0, 1, 4))  
console.log(isSumEvenOrOdd(0, -1, -5))      
console.log(isSumEvenOrOdd(0, 0, 0))  
console.log(isSumEvenOrOdd(7, 1, 9))        
console.log(isSumEvenOrOdd(1, 1, 1))   

//3

const decimal2 = arr => {
  return arr.map((salary) => parseFloat(salary.toFixed(2)))  
}

console.log(decimal2( [94.356, 8.9752] ))  
console.log(decimal2( [76.62, 128.4, 84] ))  
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] ))   

console.log(decimal2( [ ] ))  
console.log(decimal2( [4.35623, 8.9742] )) 

//4
const myPow = (x, n) => {
      return  (x ** n)
  }


console.log(myPow(3, 3)) 
console.log(myPow(10, 1))  
console.log(myPow(100, 0)) 
console.log(myPow(1, 1))  
console.log(myPow(4, 2))    
console.log(myPow(0, 0))    
console.log(myPow(5, 3))

//5
const findLongestWord = str => {
    if (!str.trim()) return "";
    return str.split(" ").reduce((longest, word) => 
        word.length > longest.length ? word : longest, ""
);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))   

console.log(findLongestWord("This is a sample string for testing"))  
 
console.log(findLongestWord("One two ten"))  
console.log(findLongestWord(""))  
console.log(findLongestWord("      ")) 