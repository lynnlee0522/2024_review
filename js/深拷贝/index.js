function isObject(value) {
    const valueType = typeof value
    return (value !== null) && (valueType === "object" || valueType === "function")
}

function deepClone(originValue, map = new WeakMap()) {

    // 判断是否是一个Set类型
    if (originValue instanceof Set) {
        return new Set([...originValue])
    }

    // 判断是否是一个Map类型
    if (originValue instanceof Map) {
        return new Map([...originValue])
    }

    if (originValue instanceof RegExp) {
        return new RegExp(originValue)
    }

    // 判断如果是Symbol的value, 那么创建一个新的Symbol
    if (typeof originValue === "symbol") {
        return Symbol(originValue.description)
    }

    // 判断如果是函数类型, 那么直接使用同一个函数
    if (typeof originValue === "function") {
        return originValue
    }

    // 判断传入的originValue是否是一个对象类型
    if (!isObject(originValue)) {
        return originValue
    }

    if (map.has(originValue)) {
        return map.get(originValue)
    }

    const newObject = Array.isArray(originValue) ? [] : {}
    map.set(originValue, newObject)
    for (const key in originValue) {
        newObject[key] = deepClone(originValue[key], map)
    }

    const symbolKeys = Object.getOwnPropertySymbols(originValue)
    for (const sKey of symbolKeys) {
        newObject[sKey] = deepClone(originValue[sKey], map)
    }

    return newObject
}


// let s1 = Symbol("aaa")
// let s2 = Symbol("bbb")

// const obj = {
//     name: "why",
//     age: 18,
//     friend: {
//         name: "james",
//         address: {
//             city: "广州"
//         }
//     },
//     // 数组类型
//     hobbies: ["abc", "cba", "nba"],
//     // 函数类型
//     foo: function (m, n) {
//         console.log("foo function")
//         console.log("100代码逻辑")
//         return 123
//     },
//     [s1]: "abc",
//     s2: s2,
//     // Set/Map
//     set: new Set(["aaa", "bbb", "ccc"]),
//     map: new Map([["aaa", "abc"], ["bbb", "cba"]])
// }

// const newObj = deepClone(obj)
// console.log(newObj)


const obj2 = {
    name: 'lilin'
}

obj2.info = obj2

const newObj2 = deepClone(obj2)

console.log("---", newObj2);