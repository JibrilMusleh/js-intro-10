function printName() {
    console.log(`The fullname is ${this.fname} ${this.lname}!`)
}


printName();

const student = {
    fname: 'Alex',
    lname: 'Smith',
};

const instructor = {
    fname: 'John',
    lname: 'Doe'
}

printName.call(student);
printName.apply(student);

