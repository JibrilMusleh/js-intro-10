function startE(name) {
    if(name[0] === "E" || name[0] === 'e') return true 
    return false 
}
console.log(startE('Emily'));
console.log(startE('emily'));
console.log(startE('Alex'));
console.log(startE(''));

function divisible5(number) {
    if(number % 5 === 0) return true
    return false
}

console.log(divisible5(7))
console.log(divisible5(0))
console.log(divisible5(10))
console.log(divisible5(99))


/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/

function fooBar(number) {
    if(number % 5 === 0 && number % 7 === 0){
        return 'foobar'
    }
    else if (number % 7 === 0){
        return 'bar';
    }
    else if (number % 5 === 0) {
        return 'foo'
    }

    return number;
}

console.log(fooBar(35))
console.log(fooBar(5))
console.log(fooBar(14))
console.log(fooBar(9))

