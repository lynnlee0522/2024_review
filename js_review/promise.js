const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        this.onFulfilledFns = []
        this.onRejectedFns = []
        this.value = undefined
        this.reason = undefined


        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_FULFILLED
                    this.value = value
                    this.onFulfilledFns.forEach(fn => {
                        fn(this.value)
                    })
                })
            }
        }


        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_REJECTED
                    this.reason = reason
                    this.onRejectedFns.forEach(fn => {
                        fn(this.reason)
                    })
                })
            }
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === PROMISE_STATUS_PENDING) {
            if (onFulfilled) {
                this.onFulfilledFns.push(onFulfilled)
            }
            if (onRejected) {
                this.onRejected.push(onRejected)
            }
        }
    }
}

new MyPromise((resolve, reject) => {
    setTimeout(() => {

        resolve(333)
    }, 1000)
}).then((res) => {
    console.log("---res---", res);
}, (error) => {
    console.log("---error---", error);
})