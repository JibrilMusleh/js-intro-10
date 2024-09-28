
const parentEl = document.getElementById('parent')

const child1El = document.getElementById('child 1')
const child2El = document.getElementById('child 2')
const child3El = document.getElementById('child 3')

//Node only

// parentNode
console.log(child1El.parentNode); // parent div
console.log(parentEl.parentNode);

// childNodes
const childNodes = parentEl.childNodes;
console.log(childNodes);

//firstChild, lastChild
console.log('First Child', parentEl.firstChild)
console.log('Last Child', parentEl.lastChild)

//perviousSibling, nextSibling
console.log('Pervious to child1', child1El.previousSibling)
console.log('Next sibling to child1', child1El.nextSibling)

// Elemnts only

// parentElement
console.log('Parent Element of child 1', child1El.parentElement)
console.log('Parent Element of parent div', parentEl.parentElement)

//children
console.log('Childen of parent div', parentEl.children);

// firstElementChild, lastElementChild
console.log('First Element Child', parentEl.firstElementChild)
console.log('Last Element Child', parentEl.lastElementChild)

console.log('Child 2', child1El.nextElementSibling)
console.log('Child 2', child3El.nextElementSibling)