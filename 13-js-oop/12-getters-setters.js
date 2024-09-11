class Program {
    constructor(programName) {
        this.programName = programName;
    }

    getProgramName() {
        return this.programName;
    }
    setProgramName() {
        this.programName = this.programName;
    }
}

const program1 = new Program('SDET')

console.log(program1.getProgramName());


program1.setProgramName('Developer');

console.log(program1.setProgramName());