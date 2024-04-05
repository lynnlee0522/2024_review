let arr = [{age: 1}, {age: 5}, {age: 100}, {age: 34}]
for(let {age} of arr) {
    if (age > 10) {
        break // for of 允许中断
    }
    console.log(age)
}
// 