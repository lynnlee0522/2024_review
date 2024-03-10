class EventEmitter {

    constructor() {
        this._events = Object.create({});
    }

    on(type, fn) {
        //参数校验
        if (!(typeof type == 'string')) {
            throw new TypeError('type must be string')
        }
        if (!(typeof fn === 'function')) {
            throw new TypeError('fn must be function!')
        }
        this._events = this._events || {};
        let row = this._events[type];
        Array.isArray(row) ? '' : this._events[type] = [];
        this._events[type].push(fn);

    }

    off(type, fn) {
        //不指定移除的函数就一处所有的
        if (!(typeof type == 'string')) {
            throw new TypeError('type must be string')
        }
        if (!this._events[type] || this._events[type].length == 0) {
            return;
        }
        if (!fn) {
            this._events[type] = [];
            return
        }
        let fns = this._events[type];
        fns = fns.filter((item) => item !== fn);
        this._events[type] = fns;
    }

    once(type, fn) {
        if (!(typeof type == 'string')) {
            throw new TypeError('type must be string')
        }
        if (!(typeof fn === 'function')) {
            throw new TypeError('fn must be function!')
        }

        console.log("---here11--");
        const context = this;
        function oneFn(...args) {
            fn.call(context, ...args);
            context.off(type, oneFn);
        }
        context.on(type, oneFn);
    }

    emit(type, ...args) {
        if (!(typeof type == 'string')) {
            throw new TypeError('type must be string')
        }
        if (!this._events[type] || this._events[type].length == 0) {
            return;
        }
        this._events[type].forEach(fn => {
            fn.call(this, ...args);
        });
    }
}

const eventEmitter = new EventEmitter();

// eventEmitter.on('click', function () {
//     console.log("--1---");
// })

eventEmitter.on('click', () => {
    console.log("--1---");
})

eventEmitter.once('click', () => {
    console.log("--2---");
})

eventEmitter.emit('click');
eventEmitter.emit('click');