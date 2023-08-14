const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій","Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
    return [[students[0],students[2]], [students[1],students[3]], [students[4],students[5]]]
}
const pairs = getPairs(students)

console.log("Пари студентів", pairs)

function getStudentsThemes(pairs, themes) {
    const themesPairs = [...pairs]
    themesPairs.map((item, index) => item.push(themes[index]))
    return themesPairs
}
const themesPairs = getStudentsThemes(pairs, themes)
console.log("Теми для пар", themesPairs)

function getStudentsMark(students, marks) {
   const arr = students.map((item, index) => [item, marks[index]])
    return arr
}
const studentsMarks = getStudentsMark(students, marks)
console.log("Оцінки", studentsMarks)

function getRandomInt() {
    const min = Math.ceil(1);
    const max = Math.floor(6);
    return Math.floor(Math.random() * (max - min) + min)
}
function getRandomMark(themesPairs) {
    const arr = [...themesPairs]
    arr.map((item, index) => item.push(getRandomInt()))
    return arr
}

console.log("Оцінки пар", getRandomMark(themesPairs))