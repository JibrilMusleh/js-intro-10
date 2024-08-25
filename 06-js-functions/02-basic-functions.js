

function isEven(number) {
   return number % 2 === 0
}

console.log(isEven(12))


function isODD(number) {
    return number % 2 !== 0
 }
 
 console.log(isODD(12))
 console.log(isODD(9))



 function initials(fname, lname) {
   return `${fname[0]}.${lname[0]}.`;
 }

 console.log(initials('John', 'Doe'))
 console.log(initials('Alex', 'Smith'))

 function inits(fullname) {
    return fullname[0].toUpperCase() + fullname[fullname.indexOf(' ') + 1].toUpperCase();
 }

 console.log(inits('John Doe'));


 function getRandomNumber(num1, num2) {
      let max = Math.max(num1, num2)
      let min = Math.min(num1, num2)

      return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 console.log(getRandomNumber(3, 5))
 console.log(getRandomNumber(3, 5))
 console.log(getRandomNumber(3, 5))
 console.log(getRandomNumber(3, 5))
 console.log(getRandomNumber(3, 5))