class MyEventEmitter {
    constructor() {
        this.events = {}
    }

    on(eventName, callback, thisArg) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback.bind(thisArg))
    }

    emit(eventName) {
        if (!this.events[eventName]) {
            return
        }
        this.events[eventName].map(func => {
            try {
                func()
            } catch (error) {
                throw error
            }
        })
    }

    off(eventName, callback) {
        if (!this.events[eventName]) {
            return
        }
        this.events[eventName].filter(item => {
            return item !== callback
        })
    }
}

const handleCallback = function () {
    console.log("监听abc1", this)
}

const eventBus = new MyEventEmitter();

eventBus.on("abc", handleCallback, { name: "why" })

eventBus.on("abc", handleCallback, { name: "hahah" })

eventBus.on("abc", handleCallback)

eventBus.emit('abc')

console.log("--222---", eventBus);


