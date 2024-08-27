// How to create an object

const obj1 = {}; // empty object
const obj2 = new Object(); // empty object


const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami'],
    address: {
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: '12345 -1234',
        country: 'US'
    },
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null,
    numberOfKids: 7
};

// Getting properties using either dot notation or bracket notation
console.log(person.favNumber);// 7
console.log(person['favNumber']);// 7

// Updating properties
person.jobTitle = 'SDET Lead';
person['jobTitle'] = 'SDET Lead';

console.log(person.jobTitle) // 'SDET Lead'

// fave city and ZIP Code
console.log(person.favCities[1])
console.log(person.address.ZIP)

// Adding a new property
person.favProgrammingLanguage = 'TypeScript';
person.favColor = 'Yellow'
person.paymentDetails = [
    {
        cardNumber: 1234567812345678,
        expDate: '11/11/2029',
        securityCode: 123,
        address: {
            street1: '123 Chicago St',
            street2: 'APT 2',
            city: 'Chicago',
            state: 'IL',
            ZIP: '12345 -1234',
            country: 'US'
        }
    },
    {

    },
    {
       accountNumber: 123456789,
       routingNumber: 123456789 
    }
];

// get the security code
console.log(person.paymentDetails[0].securityCode);

console.log(person);

// Deleting some properties 
delete person.address;
delete person['paymentDetails'];

console.log(person);

