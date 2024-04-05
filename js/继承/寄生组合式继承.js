function inheritPrototype(subType, superType) {
    const newObj = Object.create(superType.prototype)
    subType.prototype = newObj

    Object.defineProperty(newObj, 'constructor', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: subType
    })
}

function Person(name) {
    this.name = name
}

Person.prototype.running = function () {
    console.log("---running---");
}

function Student(name, id) {
    Person.call(this, name)
    this.id = id
}

inheritPrototype(Student, Person)

Student.prototype.study = function () {
    console.log("---study---");
}

const stu = new Student('lilin', '1')
stu.study();
stu.running();

console.log("---stu---", stu);

