const boxEl = document.getElementById('box')
console.log('Style object', boxEl.style)

boxEl.style.border = '2px solid gray';
boxEl.style.backgroundColor = 'lightgray';
boxEl.style.color = 'red';


const boxes = document.querySelectorAll('.box2')

for (let index = 0; index < boxes.length; index++) {
    const element = array[index];
    element.style.backgroundColor = 'aqua'
    element.style.padding = '40px'
    element.style.border = '1px solid'
    
}



