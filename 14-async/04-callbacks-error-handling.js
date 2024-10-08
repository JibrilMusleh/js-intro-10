/*
function testAge(age, callback, err) {
    setTimeout(() => {
        if(age >= 16) callback()
        else err(); 
    }, 2000)
}

testAge(15, () => {
    console.log('Age is allowed')
}, () => {
    console.log('Age is not allowed')
});
*/

function testAge(age, callback, err) {
    setTimeout(() => {
        if(age >= 16) callback('Age is allowed')
        else err('Age is not allowed'); 
    }, 2000)
}

testAge(20, (successMessage) => {
    console.log(successMessage)
}, (errorMessage) => {
    console.log(errorMessage)
})

