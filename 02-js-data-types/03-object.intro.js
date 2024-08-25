const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'johndoe@gmail.com',
    phone: '000-000-0000'
};

console.log(user);
console.log(typeof user);

//Getting a specific information fo the object using dot notation or bracket notation

console.log(user.firstName);
console.log(user.email);

// Updating the property values using dot notation or bracket notation
user.firstName = 'Alex';
user['phone'] = '111-111-1111';

// Adding a new property to an object 
user.passward = 'test1234';
console.log(user);

// removing an existing property from the object
delete user.age;
delete user['lastName'];

console.log(user)

