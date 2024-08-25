const{getRandomNumber} = require('../utils/MathHelper.js')

let r1 = (getRandomNumber(1, 10))
console.log('Random number is =', r1);

if(r1 === 1) {
    console.log('3 POINTS')
}
else if(r1 === 2) {
    console.log('2 POINTS')
}
else if(r1 === 3) {
    console.log(' 1 POINT')
}
else {
    console.log('0 POINT')
}


console.log('Random number is =', r1);

switch(r1) {
    case 1:
        console.log('3 POINTS')
        break;
    case 2: 
        console.log('2 POINTS')
        break;
    case 3:
        console.log(' 1 POINT')
        break;
    default:
        console.log('0 POINT')

}


const date = new Date()

console.log(date.getDate()) //5
console.log(date.getMonth()) //7
console.log(date.getFullYear()) //2024
console.log(date.getDay()) //1 (Monday)
console.log(date.getHours()) //19
console.log(date.getMinutes()) //29
console.log(date.getSeconds()) //34
console.log(date.getMilliseconds()) //341

console.log(date.toLocaleTimeString()) //7:31:34 PM
console.log(date.toLocaleDateString()) // 8/5/2024

let day = new Date().getDay();

if(day >= 1 && day <= 5) console.log('WEEKDAY');
else console.log('WEEKEND');

if(day !== 0 && day !== 6) console.log('WEEKDAY');
else console.log('WEEKEND');

if(day === 0 || day === 6) console.log('WEEKEND');
else console.log('WEEKDAY');

let r2 = getRandomNumber(1, 100);
console.log('The random number is', r2);

if(r2 <= 25) console.log('FIRST')
else if(r2 <= 50) console.log('SECOND')
else if( r2 <= 75) console.log('THIRD')
else console.log('Fourth')


switch(true){
    case r2 <= 25:
        console.log('FIRST')
        break;
    case r2 <= 50:
        console.log('SECOND')
        break;
     case r2 <= 75:
        console.log('THRID')
        break;
    default:
        console.log('FOURTH')
}



