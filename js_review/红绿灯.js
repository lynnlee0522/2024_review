function* light() {
    console.log('red')
    yield
    console.log('green')
    yield
    console.log('yellow')
}

const run = () => {
    const generator = light();

    const timer1 = setTimeout(() => {
        generator.next();
        clearTimeout(timer1)
    }, 3000)

    const timer2 = setTimeout(() => {
        generator.next();
        clearTimeout(timer2)
    }, 2000)

    const timer3 = setTimeout(() => {
        generator.next();
        clearTimeout(timer3)
        setTimeout(run, 3000)
    }, 1000)
}

run();

console.log("--hahah--");