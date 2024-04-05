function foo(...args) {
    console.log("---hahha---", this, args);
}

const obj = {
    name: 'lilin'
}


function linBind(thisObj, ...args) {
    const fn = this;

    thisObj = ((thisObj !== null) && (thisObj !== undefined)) ? Object(this) : globalThis

    function proxyFunc (...otherArgs) {
        const s1 = Symbol('fn')
        Object.defineProperty(thisObj, s1, {
            configurable: true,
            enumerable: false,
            value: fn,
            writable: true
        })

        const newArgs = [...otherArgs, ...args]
        const result = thisObj[s1](...newArgs)

        return result
    }
    return proxyFunc
}

Function.prototype.linBind = linBind

const newFoo = foo.linBind(obj, 'haha1')
newFoo('haha2')