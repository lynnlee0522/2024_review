const friends = ['lilin1', 'lilin2', 'lilin3']

let index = 0

const friendsIterator = {
    next: () => {
        if (index < friends.length) {
            return {
                done: false,
                value: friends[index++]
            }
        } else {
            return {
                done: true,
                value: undefined
            }
        }
    }
}

console.log(friendsIterator.next());
console.log(friendsIterator.next());
console.log(friendsIterator.next());