class Custumer {
    constructor(fname, lname, id) {
        this.fname = fname 
        this.lname = lname
        this.id = id 
    }
}


class PrimeCustumer extends Custumer {
    constructor(fname, lname, id, primeCode) {
        super(fname, lname, id)
        this.primeCode = primeCode
    }
}

const constumer = new Custumer('John', 'Doe', 123);
const primeCustumer = new PrimeCustumer('John', 'Doe', 123, 'ABC');

console.log(constumer);
console.log(primeCustumer)