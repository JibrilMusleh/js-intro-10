const arr = [ 'Remote', 'Laptop', 'Computer', 'Phone'];

const [remote, laptop, computer, phone] = arr;


console.log(computer);

const product = { 
    name: 'Iphone 16 pro max',
    price: 1099,
    color: 'Black',
    quanity: 5

};

const { price, quanity} = product 
console.log(`Total = $${price * quanity}`);