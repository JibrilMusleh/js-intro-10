/*
STUDENT PROTOTYPE - Properties - HAS
fname
lname
age
program



STUDENT PROTOTYPE - Properties - DO
study()
attendClass()
takeExam()


CAR PROTOTYPE - properties
make
model
year
price
color
engineSize

CAR PROTOTYPE - function
drive()
turn()
brake()
accelerate()
stop()


BANK CUSTOMER - properties
fname
lname
address
phone
SSN
accountNumber
credentials


BANK CUSTOMER - functions
transfer()
deposit()
openAccount()
closeAccount()
apply()
updateInfo()
*/

/* const student1 = {
    fname: 'John',
    lname: 'Doe',
    age: 25,
    info: function () {
        console.log(`Student info = Fullname: ${fname} ${lname}, Age: ${age}`)
    }
}

const student2 = {
    fname: 'Jibril',
    lname: 'Musleh',
    age: 19,
    info: function () {
        console.log(`Student info = Fullname: ${fname} ${lname}, Age: ${age}`)
    }
}


const student3 = {
    fname: 'Harry',
    lname: 'Peters',
    age: 25,
    info: function () {
        console.log(`Student info = Fullname: ${this.fname} ${this.lname}, Age: ${this.age}`)
    }
}
*/
/*
// before ES6 - Protypes
function Student(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

Student.prototype.info = function () {
    console.log(`Student info = Fullname: ${this.fname} ${this.lname}, Age: ${this.age}`)
}

const student1 = new Student('John', 'Doe', 25);
const student2 = new Student('Aline', 'Hegyi', 36);
const student3 = new Student('Adela', 'Mucea', 37);

console.log(student1)
console.log(student2)
console.log(student3)

student1.info()
student2.info()
student3.info()
*/


// after Es6 - Classes
class Student {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
}
    info() {
        console.log(`Student info = Fullname: ${this.fname} ${this.lname}, Age: ${this.age}`)
    }
}


const student1 = new Student('John', 'Doe', 25);
const student2 = new Student('Aline', 'Hegyi', 36);
const student3 = new Student('Adela', 'Mucea', 37);

console.log(student1)
console.log(student2)
console.log(student3)

student1.info()
student2.info()
student3.info()