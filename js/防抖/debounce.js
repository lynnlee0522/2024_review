function debounce(fn, delay, immediate = false, resultCallback) {
    let timer;
    // 是否经过立即执行
    let invoke = false;

    function _debounce(...args) {
        return new Promise((resolve, reject) => {
            if (timer) clearTimeout(timer)

            if (immediate && !invoke) {
                const result = fn.apply(this, args);
                if (result) {
                    resultCallback(result);
                    resolve(result)
                }
                invoke = true;
            } else {
                timer = setTimeout(() => {
                    const result = fn.apply(this, args);
                    if (result) {
                        resultCallback(result);
                        resolve(result)
                    }
                    invoke = false;
                }, delay)
            }
        })
    }

    _debounce.cancel = function () {
        clearTimeout(timer);
        timer = null;
        invoke = false;
    }

    return _debounce
}
