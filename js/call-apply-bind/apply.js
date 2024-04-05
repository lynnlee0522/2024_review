function foo(sex) {
    console.log("---hahha---", this, this.name, sex);
}

const obj = {
    name: 'lilin'
}


function linApply(thisObj, args) {
    const fn = this;

    thisObj = ((thisObj !== null) && (thisObj !== undefined)) ? Object(this) : globalThis

    const s1 = Symbol('fn')
    Object.defineProperty(thisObj, s1, {
        configurable: true,
        enumerable: false,
        value: fn,
        writable: true
    })

    const newArgs = args ?? []

    const result = thisObj[s1](...newArgs)
    return result

}

Function.prototype.linApply = linApply

foo.linApply()
