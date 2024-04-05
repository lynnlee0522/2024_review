const requestData = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url)
        }, 1000);
    })
}

// function* getData() {
//     const res1 = yield requestData('aaa')
//     console.log("--res1---", res1);
//     const res2 = yield requestData(res1 + 'bbb')
//     console.log("--res2---", res2);
//     const res3 = yield requestData(res2 + 'ccc')
//     console.log("--res3---", res3);
// }

// const generator = getData();

// generator.next().value.then(res => {
//     console.log("--res---", res);
//     generator.next().value.then(res => {
//         console.log("--res2---", res);
//         generator.next().value.then(res => {
//             console.log("--res3---", res);
//         })
//     })
// })

async function getData() {
    const res1 = await requestData('aaa')
    console.log("--res1---", res1);
    const res2 = await requestData(res1 + 'bbb')
    console.log("--res2---", res2);
    const res3 = await requestData(res2 + 'ccc')
    console.log("--res3---", res3);
}

getData();

// const co = require('co')
// co(getData)

