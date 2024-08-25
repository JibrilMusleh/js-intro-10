// break vs continue

// Print all the numbers from 0-10 expect the even numbers

for(let i = 0; i <= 10; i++) {
    if(i === 8) console.log(i);
}

for(let i = 1; i <= 20; i++) {
    if(i !== 6 && i !== 13) console.log(i);
}

for(let i = 1; i <= 20; i++) {
    if(i === 6 || i === 13) continue;
    if(i === 16) break;
        console.log(i);
}