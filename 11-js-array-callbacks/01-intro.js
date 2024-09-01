function getInfo() {
    console.log('Today is Saturday');
}

function greet(func) {
    console.log('Hello');
    func();
}


greet(getInfo);

