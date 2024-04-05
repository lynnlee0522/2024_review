// function* createArrayIterator(arr) {

//     // 3.第三种写法 yield*
//     yield* arr

//     // 2.第二种写法
//     // for (const item of arr) {
//     //   yield item
//     // }

//     // 1.第一种写法
//     // yield "abc" // { done: false, value: "abc" }
//     // yield "cba" // { done: false, value: "abc" }
//     // yield "nba" // { done: false, value: "abc" }
// }

// const friends = ['lilin', 'kobe', 'maya']
// const iterable = createArrayIterator(friends)

// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());

// 第二遍
const arr = ['haha', 'hehe', 'mama']
// function* createArrayIterator(arr) {
//     yield* arr
// }

function* createArrayIterator(arr) {
   for (const iterator of arr) {
        yield iterator
   }
}

const iterator = createArrayIterator(arr);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());