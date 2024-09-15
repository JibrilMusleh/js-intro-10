const { Program } = require('../utils/Program.js')

// using then() and catch()
function test1 () {
    Program.gotoAmazon()
        .then(() => Program.selectProduct())
        .then(() => Program.addToCart())
        .then(() => Program.checkout())
        .catch((err) => console.log(err));
}

test1();


// using async await

async function test2() {
try{
    await Program.gotoAmazon();
    await Program.selectProduct();
    await Program.addToCart();
    await Program.checkout();
}
 catch(err) {
    console.log(err)
 }

}

test2();