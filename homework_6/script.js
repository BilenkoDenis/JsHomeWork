const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

function GetAverageMarkCalculate(arr) {
    let result = 0;

    arr.forEach(number => result += number);

    return result / arr.length;
}

function GetAverageStudentMark(student) {
    return GetAverageMarkCalculate(student.marks);
}

function GetAverageGroupMark(students) {
    let studentsMarks = students.map(i => i.marks);

    let allMarks = [].concat.apply([], studentsMarks);

    return GetAverageMarkCalculate(allMarks);
}

function showAverageMarks(avgStudent, avgGroup) {
    return `    Student id: ${avgStudent.id}
    Student name: ${avgStudent.name}
    Student average mark: ${GetAverageStudentMark(avgStudent)}
    Group average mark: ${GetAverageGroupMark(avgGroup)}`
}

alert(showAverageMarks(students[3], students));
console.log(showAverageMarks(students[3], students));

