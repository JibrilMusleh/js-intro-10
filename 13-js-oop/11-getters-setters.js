class Account {
    constructor(username, passward) {
        this.username =  username;
        this.passward = passward;
    }

    setUsername(username) {
        if(username != '') this.username = username;
        else throw new Error('Username cannot be empty!!!')
    }

    getUsername(username) {
        return this.username
    }


    setPassward(passward) {
        if(passward.length >= 8) this.passward = passward
        else throw new Error('Passward should have length of 8 characters at least!!!')
    }

    getPassward() {
        return this.passward
    }
}

const myAccount = new Account('TechGlobal', 'Test1234');

console.log(myAccount.username)
console.log(myAccount.passward)

myAccount.setPassward('ABCD9999')

console.log(myAccount.getPassward)

