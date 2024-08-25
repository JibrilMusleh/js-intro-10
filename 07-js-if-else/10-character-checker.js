const{ CharacterHelper } = require('../utils/CharacterHelper.js');

console.log(CharacterHelper.isDigit('5'))

let ranNum1 = Math.floor(Math.random() * 100) + 1

if (ranNum1 <= 50) {
  console.log('1st half')
}
else {
  console.log('second half')
}