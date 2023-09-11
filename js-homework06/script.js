const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

function capitalize(name) {
    const [firstLetter, ...rest] = name.split('')
    const formattedName = `${firstLetter.toUpperCase()}${rest.join('').toLowerCase()}` 
    return formattedName
}

const getSubjects = (student) => {
    const { subjects } = student
    const capitalizeSubjects = Object.keys(subjects).map((item) => {
        return capitalize(item.replace("_", " "))
    })
    return capitalizeSubjects
}

const getAverageMark = (student) => {
    const { subjects } = student
    const allMarks = []
    const marks = Object.values(subjects).map((item) => {
        return item.map((number) => {
            allMarks.push(number)
        })
    })
    let averageMark = 0
    allMarks.map((item) => {
        averageMark = averageMark + item 
    })

    return (averageMark/allMarks.length).toFixed(2)
}

const getStudentInfo = (student) => {
    const { name, course } = student 
    console.log(`{ 'name: ${name}', 'course:${course}', 'average mark:${getAverageMark(student)}'}`)
}

const getStudentsName = (students) => {
    const studentsNames = []
    students.map((item) => {
        studentsNames.push(item.name)
    }) 
    return studentsNames.sort()
} 

const getBestStudent = (students) => {
    let name = ""
    students.map((item,index) => {
        const obj = {}
        const mark = [] 
        mark.push(getAverageMark(item))
        obj[getAverageMark(item)] = index
        const maxNumber = Math.max(mark)
        name = students[obj[maxNumber]]?.name
    }) 
    return name
}

const calculateWordLetters = (word) => {
    const changedWord = word.split("")
    const myResult = changedWord.reduce((prevItem, item) => ({
        ...prevItem,
        [item]:changedWord.filter((letter) => letter === item).length
    }),{})
    return myResult
}