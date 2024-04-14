let s1 = Symbol("aaa")
let s2 = Symbol("bbb")

const obj = {
    name: "why",
    age: 18,
    friend: {
        name: "james",
        address: {
            city: "广州"
        }
    },
    // 数组类型
    hobbies: ["abc", "cba", "nba"],
    // 函数类型
    foo: function (m, n) {
        console.log("foo function")
        console.log("100代码逻辑")
        return 123
    },
    [s1]: "abc",
    s2: s2,
    // Set/Map
    set: new Set(["aaa", "bbb", "ccc"]),
    map: new Map([["aaa", "abc"], ["bbb", "cba"]]),
    reg: /[1-9]/g
}


const getType = (value) => {
    return Object.prototype.toString.call(value)
}

const isObject = (value) => {
    const type = typeof value
    if ((type !== 'object' && type !== 'function') || value === null) {
        return false
    }
    return true
}

const deepClone = (originValue, map = new WeakMap()) => {
    const type = getType(originValue)

    // 如果是函数类型
    if (type === '[object Map]') {
        return new Map([...originValue])
    }

    // 如果是函数类型
    if (type === '[object Set]') {
        return new Set([...originValue])
    }

    // 如果是函数类型
    if (type === '[object Function]') {
        return originValue
    }

    // 如果值是Symbol
    if (type === '[object Symbol]') {
        return Symbol(originValue.description)
    }

    // 如果值是RegExp
    if (type === '[object RegExp]') {
        return new RegExp(originValue)
    }

    // 如果是原始类型，直接返回
    if (!isObject(originValue)) {
        return originValue
    }

    if (map.has(originValue)) {
        console.log("---map2--", map, originValue);
        return map.get(originValue)
    }

    // 如果是数组
    let newObject;
    console.log("---map---", map);
    if (type === '[object Array]') {
        newObject = []
        map.set(originValue, newObject)
        for (let item of originValue) {
            newObject.push(deepClone(item, map))
        }
    }

    // 如果是对象
    if (type === '[object Object]') {
        newObject = {}
        map.set(originValue, newObject)
        for (let key in originValue) {
            newObject[key] = deepClone(originValue[key], map)
        }
    }

    // 如果key是Symbol
    const symbolKeys = Object.getOwnPropertySymbols(originValue)
    for (let key of symbolKeys) {
        newObject[key] = deepClone(originValue[key], map)
    }

    return newObject
}


const obj2 = {
    name: 'lilin'
}

obj2.info = obj2


const newObj2 = deepClone(obj2)

console.log("---new obj----", newObj2);