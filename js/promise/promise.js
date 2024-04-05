// ES6 ES2015
// https://promisesaplus.com/
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class LLPromise {
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledFns = []
        this.onRejectedFns = []

        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_FULFILLED
                    this.value = value
                    this.onFulfilledFns.forEach(fn => {
                        fn(this.value);
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
        } catch (err) {
            reject(err)
        }
    }

    then(onFulfilled, onRejected) {
        const defaultOnRejected = err => {
            throw err
        }
        onRejected = onRejected || defaultOnRejected

        const defaultOnFulfilled = value => { return value }
        onFulfilled = onFulfilled || defaultOnFulfilled

        // 注意 这里是new了一个新对象，resolve, reject都属于新对象
        const promise2 = new LLPromise((resolve, reject) => {
            // 2.注册成功的回调和失败的回调
            if (this.status === PROMISE_STATUS_PENDING) {
                if (onFulfilled) {
                    this.onFulfilledFns.push(() => {
                        try {
                            // 这里是调用第一个对象的onFulfilled函数，然后把返回值传递给第二个对象resolve
                            // resolve函数这里是指第二个对象的resolve，与第一个对象无关
                            const value = onFulfilled(this.value)
                            resolve(value)
                        } catch (err) {
                            reject(err)
                        }
                    })
                }
                if (onRejected) {
                    this.onRejectedFns.push(() => {
                        try {
                            const reason = onRejected(this.reason)
                            resolve(reason)
                        } catch (err) {
                            reject(err)
                        }
                    })
                }
            }
            // 1.如果在then调用的时候, 状态已经确定下来
            if (this.status === PROMISE_STATUS_FULFILLED) {
                try {
                    const value = onFulfilled(this.value)
                    resolve(value)
                } catch (err) {
                    reject(err)
                }
            }
            if (this.status === PROMISE_STATUS_REJECTED) {
                try {
                    const value = onFulfilled(this.value)
                    resolve(value)
                } catch (err) {
                    reject(err)
                }
            }

        })

        return promise2
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }

    finally(onFinally) {
        this.then(onFinally, onFinally)
    }

    static resolve(value) {
        return new LLPromise((resolve, reject) => {
            resolve(value)
        })
    }

    static reject(value) {
        return new LLPromise((resolve, reject) => {
            reject(value)
        })
    }

    static all(promises) {
        return new LLPromise((resolve, reject) => {
            const values = []
            promises.forEach((promise) => {
                promise.then((res) => {
                    values.push(res)
                    if (values.length === promises.length) {
                        resolve(values)
                    }
                }, (res) => {
                    reject(res)
                })
            })
        })
    }

    static allSettled(promises) {
        return new LLPromise((resolve, reject) => {
            const values = []
            promises.forEach((promise) => {
                promise.then((res) => {
                    values.push({
                        status: PROMISE_STATUS_FULFILLED,
                        value: res
                    })
                    if (values.length === promises.length) {
                        resolve(values)
                    }
                }, (res) => {
                    values.push({
                        status: PROMISE_STATUS_REJECTED,
                        value: res
                    })
                    if (values.length === promises.length) {
                        resolve(values)
                    }
                })
            })
        })
    }

    static race(promises) {
        return new LLPromise((resolve, reject) => {
            promises.forEach((promise) => {
                promise.then((res) => {
                    resolve(res)
                }, (res) => {
                    reject(res)
                })
            })
        })
    }

    static any(promises) {
        const errors = []
        return new LLPromise((resolve, reject) => {
            promises.forEach(promise => {
                promise.then((res) => {
                    resolve(res)
                }, (res) => {
                    errors.push(new Error(res))
                    if (errors.length === promises.length) {
                        reject(errors)
                    }
                })
            })
        })
    }
}

const promise1 = new Promise((resolve, reject) => {
    reject(111)
})
const promise2 = new Promise((resolve, reject) => {
    reject(222)
})
const promise3 = new Promise((resolve, reject) => {
    resolve(333)
})
LLPromise.all([promise1, promise2, promise3]).then((res) => {
    console.log("--res--", res);
}, (rej) => {
    console.log("--rej--", rej);
})

// promise A+
// const promise = new LLPromise((resolve, reject) => {
//     // fetch
//     setTimeout(() => {
//         reject(111)
//     }, 3000)
// })

// promise.then((res) => {
//     console.log("---res--", res);
// }, (res) => {
//     console.log("---rej--", res);
// })


// const promise = new LLPromise((resolve, reject) => {
//     resolve(111);
//     // reject(222)
//     // throw new Error("executor error")
// })

// promise.then((res) => {
//     console.log("--res--", res);
//     // return 'aaa'
//     throw new Error("error message")
// }, (err) => {
//     console.log("---err--", err);
//     // return 'bbb'
//     throw new Error("error message2")
// }).then((res) => {
//     console.log("--res2--", res);
// }, (err) => {
//     console.log("---err--", err);
//     return 'bbb'
// })

// promise.then((res) => {
//     console.log("--res--", res);
//     return res
// }).then(res2 => {
//     console.log("--res2--", res2);
// })

// // 在确定Promise状态之后, 再次调用then
// setTimeout(() => {
//     promise.then(res => {
//         console.log("res3:", res)
//     }, err => {
//         console.log("err3:", err)
//     })
// }, 1000)
// // promise.then((res) => {

// // })

// promise.then(res => {
//     console.log("res:", res)
// }).finally(() => {
//     console.log('--ha--');
// })
