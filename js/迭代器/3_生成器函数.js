function* foo(m) {
    console.log("---start---");

    const value = 100 * m
    console.log("---1-----", value);
    const n = yield value

    const value2 = 200 * n
    console.log("---2-----", value2);
    const n2 = yield value2

    const value3 = 100 * n2
    console.log("---3-----", value3);
    yield value3

    console.log("函数执行结束~")
    return '123'
}

const generator = foo(5);

console.log("---", generator.next());
console.log("---", generator.next(2));
console.log("---", generator.next(3));
console.log("---", generator.next());