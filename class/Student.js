class Student {
    // 생성자. 기본으로 가져야할 property 정의
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year
        this.tardies = 0;
        this.scores = []
    }
    // 클래스에 속한 인스턴스 메소드. 클래스로 인스턴스를 만들어야만 사용할 수 있는 메소드.
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1
        if (this.tardies >= 3) {
            return `YOU ARE EXPELLED!!!`
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score)
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) { return a + b })
        return sum / this.scores.length
    }
    
    // static 메소드. 인스턴스 생성업시 사용 가능. 유틸 용도
    static EnrollStudents(...students) {
        return "ENROLLING STUDENTS!"
    }
}

let firstStudent = new Student("Colt", "Steele")
let secondStudent = new Student("Blue", "Steele")

console.log(firstStudent.fullName())
console.log(firstStudent.markLate())
console.log(firstStudent.markLate())
console.log(firstStudent.markLate())
console.log(firstStudent)
console.log(secondStudent.addScore(92))
console.log(secondStudent.addScore(87))
console.log(secondStudent.calculateAverage())
console.log(secondStudent.addScore(100))
console.log(secondStudent.calculateAverage())
console.log(Student.EnrollStudents())