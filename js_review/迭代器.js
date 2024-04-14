// Object.prototype[Symbol.iterator] = function* () {
//     console.log("--this--", this);
//     const array = Object.values(this)
//     yield* array
// }

// Object.prototype[Symbol.iterator] = function() {
//     console.log("--this--", this);
//     const array = Object.values(this)
//     let index = 0;
//     return {
//         next: () => {
//             if (index < array.length) {
//                 return {
//                     done: false,
//                     value: array[index++]
//                 }
//             } else {
//                 return {
//                     done: true,
//                     value: undefined
//                 }
//             }
//         }
//     }
// }

Object.prototype[Symbol.iterator] = function* () {
    const array = Object.keys(this)

    for (let item of array) {
        yield item
    }
}

const obj = { a: 1, b: 2 }

for (let item of obj) {
    console.log("---111---", item);
}

