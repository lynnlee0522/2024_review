const iterableObj = {
    names: ['lilin1', 'lilin2', 'lilin3'],
    [Symbol.iterator]: function() {
        let index = 0;
        console.log("--this---", this);
        return {
            next: () => {
                if (index < this.names.length) {
                    return {
                        done: false,
                        value: this.names[index++]
                    }
                } else {
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }
}

const iterable = iterableObj[Symbol.iterator]()
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());