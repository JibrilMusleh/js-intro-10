function product(num1, num2) {
    return num1 * num2;
}


console.log(product(3, 5));
console.log(product(8, 5));

function multiply(num1) {
     return function (num2) {
        return num1 * num2;
    }
}

const double = multiply(2);
const triple = multiply(3);


console.log(double(5));
console.log(triple(5));

