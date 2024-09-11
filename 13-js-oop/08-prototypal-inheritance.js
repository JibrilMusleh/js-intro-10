const person = {
    eat: function () {
        console.log('Eat')
    },
    sleep: function () {
        console.log('Sleep')
    },
    walk: function () {
        console.log('Walk')
    }

};

const singer = {
    sing: function () {
        console.log('Sing')
    },
    playGuitar: function () {
        console.log('Play Guitar')
    },
    __proto__: person
};

singer.walk();
singer.eat();
singer.sleep();
singer.sing();
singer.playGuitar();


console.log(singer.__proto__);



