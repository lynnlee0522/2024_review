const obj = {
    a: 'haha',
    b: 'wawa',
    _age: 18,
}

Object.defineProperty(obj, 'address', {
    value: '北京市'
})

console.log(obj)

console.log('address' in obj)
console.log(obj.hasOwnProperty('address'))
console.log(obj.address)

obj.address = '广州市'
console.log(obj.address)

delete obj.address
console.log(obj.address)


// Object.defineProperty(obj, 'address', {
//     configurable: true
// })

delete obj.address
console.log(obj.address)

Object.defineProperties(obj, {
    name: {
        writable: true,
        value: 'lilin',
        enumerable: true
    },
    age: {
        configurable: true,
        enumerable: true,
        set: (value) => {
            this._age = value
        },
        get: () => {
            return this._age
        }
    }
})

console.log(obj.age)

obj.age = 13

console.log(obj.age)
