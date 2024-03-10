const foo = (...args) => {
    console.log("---args---", args);
}

const name = 'lilin';
const test = 'test'

foo`haha ${name} haha ${test}`; 