const getInfo = () => {
    return axios.get('http://localhost:8000/rooms/getRooms')
}

function repeat(func, times, delay) {
    return new Promise((resolve, reject) => {
        let count = 0;
        const executeFunc = () => {
            func().then((result) => {
                console.log("---result---", result);
                resolve(result)
            }).catch((error) => {
                console.log("---error---", error);
                count++;
                if (count < times) {
                    console.log(`Execution failed. Retrying in ${delay} milliseconds...`);
                    setTimeout(executeFunc, delay)
                } else {
                    reject("Exceeded maximum retry attempts");
                }
            })
        }

        executeFunc();
    })
}

repeat(getInfo, 3, 1000).then((res) => {
    console.log("---res---", res);
})

