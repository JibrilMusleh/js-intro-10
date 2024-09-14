class Engineer {
    #haveDegree = true; // private property

    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }

    // encapsulation: providing public getters and setters
    // provide getters: only read access is granted
    // provide setters: only write/update access is granted
    gethaveDegree() {
        return this.#haveDegree
    }

    sethaveDegree(bool) {
        this.#haveDegree = bool;
    }
}


const e1 = new Engineer('John', 'Doe')
const e2 = new Engineer('Alex', 'Smith')


console.log(e1)
console.log(e2)

// public access
//console.log(e1.#haveDegree)

console.log(e1.gethaveDegree()); // true

e2.sethaveDegree(false);

console.log(e2.gethaveDegree()) // false

