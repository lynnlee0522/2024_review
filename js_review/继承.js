const inheritPrototype = (subType, superType) => {
    // 第一步，新建一个对象，该对象的原型指向父构造函数的原型对象
    const newObject = Object.create(superType.prototype)
    // 第二步: 子构造函数的原型对象指向新建的对象
    subType.prototype = newObject
    // 第三步: 给新对象设置constructor属性，指回子对象的构造函数
    Object.defineProperty(newObject, 'contructor', {
        configurable: true,
        writable: true,
        enumerable: false,
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

const stu = new Student('lilin', 233)
console.log("---stu---", stu);