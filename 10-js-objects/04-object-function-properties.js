const car = {
    make: 'Telsa',
    model: 'Y',
    year: 2024,
    color: 'white',
    price: 49900.00,
    drive: function() {
        console.log(`${this.year} ${this.make} ${this.model} drives well!`);
    },
    getPrice: function() {
        return this.price;
    },
    getDiscountedPrice: function() {
        return this.price * 0.9
    },
    info: function() {
console.log(`${this.year} ${this.make} ${this.model} is ${this.price}`);
    } 
};

car.drive(); // 2024 Telsa Y drives well!
console.log(car.getPrice()); // 49900
console.log(car.getDiscountedPrice()); // 44910
car.info();




