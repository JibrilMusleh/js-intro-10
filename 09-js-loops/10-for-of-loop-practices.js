const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];

for(const name of names) {
    console.log(name)
}

for(i = 0; i < names.length; i++) {
    console.log(names[i])
}

let countJ1 = 0
for(const name of names) {
    if(name[0].toLocaleLowerCase() === 'j') countJ1++;
}
console.log(countJ1)

let countJ2 = 0
for(i = 0; i < names.length; i++) {
    if(names[0].toLocaleLowerCase() === 'j') countJ2++;
}
console.log(countJ2)

let count4 = 0
for(const name of names) {
    if(name.length === 4) count4++
}
console.log(count4)