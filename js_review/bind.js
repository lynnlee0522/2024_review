Function.prototype.myBind = function (thisArg, ...args) {
    const fn = this;
    const newObject = (thisArg !== null) && (thisArg !== undefined) ? Object(thisArg) : window

    function proxyFunc(...otherArgs) {
        const s1 = Symbol('fn')
        Object.defineProperty(newObject, s1, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: fn
        })

        const newArgs = [...otherArgs, ...args]
        const result = newObject[s1](...newArgs)
        return result
    }

    return proxyFunc

}

function foo(...args) {
    console.log("---hahha---", this, args);
}

const obj = {
    name: 'lilin'
}

// Function.prototype.myBind = myBind

const newFoo = foo.myBind(obj, 'haha1')
newFoo('haha2')
