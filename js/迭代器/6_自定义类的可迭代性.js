class Classname {
    constructor(students) {
        this.students = students
    }

    [Symbol.iterator] = () => {
        let index = 0;
        return {
            next: () => {
                if (index < this.students.length) {
                    return {
                        value: this.students[index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            },
            return: () => {
                console.log("迭代器提前终止了~")
                return { done: true, value: undefined }
            }
        }
    }
}

const students = ['lilin', 'haha', 'hehe']
const class1 = new Classname(students)

for (let stu of class1) {
    console.log("---stu---", stu);
    if (stu === 'haha') {
        break
    }
}

for (let stu2 of students) {
    console.log("---stu---", stu2);
    if (stu2 === 'haha') {
        return
    }
}