console.log('work')

const fib = () => {

    const start = [ 0, 1 ]

    return {
        get: () => {
            const blabla = start[start.length-1] + start [start.length-2]
            start.push(blabla)

            return start[start.length - 1]
        }
    }
};
