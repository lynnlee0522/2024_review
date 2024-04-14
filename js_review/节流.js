let count = 0

const handleClick = (event) => {
    console.log("---this--", event);
    count++
    console.log("---count--", count);
}

const throttle = function (fn, delay) {
    let lastTime = 0
    function _throttle(...args) {
        const nowTime = new Date().getTime()
        if ((delay - (nowTime - lastTime)) < 0) {
            fn.apply(this, args)
            lastTime = nowTime
        }
    }

    return _throttle
}

const inputEl = document.querySelector("button")

// 防抖处理
inputEl.onclick = throttle(handleClick, 1000)