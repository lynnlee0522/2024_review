const message = "hello world";

console.log(message);

function sum(num1, num2) {
    return num1 + num2;
}

function foo() {
    const result = sum(20, 30);
    console.log(result);
}

setTimeout(() => {
    console.log("--haha--");
}, 100);

setTimeout(() => {
    console.log("--haha--");
}, 150);

setTimeout(() => {
    console.log("--haha--");
}, 200);

queueMicrotask(() => {
    console.log("---mama--");
})


foo();