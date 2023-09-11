class Student {
    constructor(university, course, fullName, mark) {
        this.university = university
        this.course = course
        this.fullName = fullName
        this.marks = [5,5,4,5]
        this.mark = mark
    }
    getInfo() {
        console.log(`Студент ${this.course} курсу ${this.university} ${this.fullName}`)
    }
    get marks() {
        return [5, 4, 5, 4, this._marks]
    }  
    set marks(value) {
        this._marks = value
    }
    getAverageMark() {
        let sum = 0
      
        this.marks.map((item) => {
          sum += item
        })
      
        console.log('sum / this.marks.length', sum / this.marks.length)
      }
}
