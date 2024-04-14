function foo(sex) {
    console.log("---hahha---", this, this.name, sex);
}

const obj = {
    name: 'lilin'
}


Function.prototype.myApply = function (thisArg, ...args) {
    const fn = this

    const newObject = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    const s1 = Symbol.for('fn')
    Object.defineProperty(newObject, s1, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: fn
    })

    const result = newObject[s1](...args)
    return result
}

foo.myApply(obj, ['haha'])