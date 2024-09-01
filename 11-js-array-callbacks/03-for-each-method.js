const names = ['James', 'John', 'Alex', 'Maria']


for(const name of names) {
    console.log (name);
}


for(let i = 0; i < names.length; i++) {
    console.log(names[i])
}


names.forEach((x) => console.log (x));


names.forEach((name) => console.log (name.toUpperCase()));


names.forEach((name) => {
    console.log(name[0] + name.at(-1));
})


names.forEach((name) => {
    if(name.length === 4) console.log(name);
})


const result = [];
names.forEach((name) => {
    result.push(name.length);
})
console.log(result);



names.map((x) => x.length);