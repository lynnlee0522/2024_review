class Person {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }

    eating = () => {
        console.log("---i can eating---");
    }
}

class Student extends Person {
    constructor(name, sex) {
        super(name, sex)
    }
}


function mixinPlaying(id, color, name, sex) {
    return function (BaseClass) {
        return class extends BaseClass {
            constructor() {
                super(name, sex)
                this.id = id
                this.color = color
            }

            play = () => {
                console.log("---i can play--");
            }
        }
    }
}

const NewStudent = mixinPlaying('1', 'black', 'lilin', 'f')(Student)

const newStu = new NewStudent;

console.log("---newStu---", newStu, Object.prototype.toString.call(newStu));

