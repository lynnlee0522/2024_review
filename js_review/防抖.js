let count = 0
const handleClick = (event) => {
    count++
    console.log("---count--", count);
}

const debounce = function (fn, delay, isImmediate) {
    let timer;
    let invoke = false;
    function _debounce(...args) {
        if (isImmediate && !invoke) {
            fn.apply(this, args)
            invoke = true
        } else {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(this, args)
                invoke = false
            }, delay)
        }
    }
    return _debounce
}

const inputEl = document.querySelector("button")

// 防抖处理
inputEl.onclick = debounce(handleClick, 1000, true)