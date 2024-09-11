const student = {
    study: function () {
        console.log('Study')
    },
}

const mathStudent = Object.create(student);
mathStudent.fname = 'John';
mathStudent.calculate = function () {
    console.log('Calculate')
}

mathStudent.study();
mathStudent.calculate();