
const heading = getElementById('heading');
console.log(heading); // <h1 id='heading'>...</h1>


const subheaading = document.getElementsByClassName();
console.log(boxes);

boxes[0]
boxes.item(0)

boxes.forEach(element => {
    console.log(element)
});

for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    console.log(element)
}

const sections = document.getElementsByTagName('section')
console.log(sections);

for (let i = 0; i < sections.length; i++) {
    const element = sections[i];
    console.log(element)
}

const heading2 = document.querySelector('#heading');
const heading3 = document.querySelector('h1');
const heading4 = document.querySelector('.heading');

console.log('querySelector ----- ')
console.log(heading2)
console.log(heading3)
console.log(heading4)
console.log('querySelector ----- ')


const boxes2 = document.querySelector('.box');
console.log(boxes2)


const boxes3 = document.querySelectorAll('.box');
console.log(boxes3)


console.log('querySelector ----- ')
boxes3.forEach(el => console.log(el))

const boxEntries = boxes3.entries((a,b) => console.log(a,b))
console.log(boxEntries);

for (const entry of boxEntries) {
    console.log(entry)
}



console.log('querySelector ----- ')