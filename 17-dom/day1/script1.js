console.log('This is js file')


// test/qa, dev, prod(no error) -> hot fix
// client, server
// window
console.log('window', window) // window in client env is an object
console.log(typeof window) // object

// In server side window is undefined



// window.alert('Hi');
// const alertAns = window.alert('How are you?')
// console.log(alertAns) // undefined

// const ans = prompt('How are you today?')
// console.log(ans); // string

// const confirmAns = confirm('Are you ready to enter?')
// console.log(confirmAns)

// console.log(innerHeight) // number
// console.log(innerWidth) // number


localStorage.setItem('username', 'tg20');

const username = localStorage.getItem('username')
console.log(username)

localStorage.removeItem('username');

localStorage.setItem('username2', 'tg2020')
localStorage.setItem('username3', 'tg202020')


localStorage.clear();
