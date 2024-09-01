// this keyword

const person = {
    fname: 'John',
    lname: 'Doe',
    fullname: function (){
        console.log(`The fullname is ${this.fname} ${this.lname}`);
    }
}

person.fullname();

const student = {
    fname: 'Alex',
    lname: 'Smith'
}

person.fullname.call(student);

function hi(str) {
    console.log(`Hi, ${str}!`)
}

const instructor = {
    name: 'John Doe'
}

hi('Data');

hi.call(instructor, instructor.name); // Hi, John Doe!