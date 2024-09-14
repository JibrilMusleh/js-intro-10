console.log(Math.PI) // PI is a static property


console.log(Math.max(1, 2)) // Math is a static method


/*
static methods-properties: can be invoked with className or prototype
*/


class AmazonAccount {
    variable1 = 'Hello';
    variable2 = 'World';
    // static methods can be invoked by the class or prototype name
    aFunction() {
        console.log('Static Method');
    }
    // non-static methods can be invoked by the objects of this calss or prtotype
    bFunction() {
        console.log('Non-Static Method')
    }
}

const aa = new AmazonAccount()
aa.aFunction()
aa.bFunction()

AmazonAccount.aFunction();


// Static Methods
Array.isArray()
Object.entries()
Object.keys()
Object.values()
Object.create()
Math.min()


//Static properties
Math.PI;
Number.MAX_VALUE;
Number.MIN_VALUE

