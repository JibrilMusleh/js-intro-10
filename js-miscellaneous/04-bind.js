function getInfo() {
    console.log(`${this.fullname} is ${this.age} years old.`)
}

getInfo();

const obj = {
    fullname: 'Morgan James',
    age: 30
}


getInfo.call(obj);
getInfo.apply(obj);
getInfo.bind(obj);