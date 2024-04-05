function throttle(fn, interval, options = { leading: true, trailing: false }) {
    const { leading, trailing } = options
    let lastTime = 0;
    let timer = null;

    function _throttle(...args) {
        const nowTime = new Date().getTime();
        if (!leading && !lastTime) {
            lastTime = nowTime
        }
        const remainTime = interval - (nowTime - lastTime)

        if (remainTime < 0) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }

            fn.apply(this, args);
            lastTime = nowTime;
            return
        }

        if (trailing && !timer) {
            timer = setTimeout(() => {
                timer = null
                lastTime = !leading ? 0 : new Date().getTime();
                fn.apply(this, args);
            }, remainTime)
        }

    }

    return _throttle
}