class Engineer {
    constructor(fname, lname, age) {
        this.fname = fname 
        this.lname = lname
        this.age = age 
    }
    work() {
        console.log('Work')
    }

    solveProblem() {
        console.log('Solve Problem')
    }
}

class Tester extends Engineer {
    constructor(fname, lname, age, companyName) {
        super(fname, lname, age)
        this.companyName = companyName 
    }
    test() {
        console.log('Test')
    }
}

const tester1 = new Tester ('John', 'Doe', 25, 'Microsoft')

console.log(tester1)
tester1.work()
tester1.solveProblem()
tester1.test()



class SDET extends Tester {
    constructor(fname, lname, age, companyName, pLanguage) {
        super(fname, lname, age, companyName, pLanguage);
        this.pLanguage = pLanguage
    }
    code() {
        console.log(`Codes in ${this.pLanguage}!`)
    }
}

const sdet1 = new SDET('Alex', 'Smith', 30, 'Apple', 'JavaScript');
console.log(sdet1)
sdet1.work();
sdet1.solveProblem();
sdet1.test();
sdet1.code();

