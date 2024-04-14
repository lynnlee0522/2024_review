import React, { useEffect, useRef, useState } from 'react'

const useDebounce = (num) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(num)
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [num])

    return [count]
}

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [debounceCount] = useDebounce(count);
    console.log("---debounceCount---", debounceCount);

    const handleClick = () => {
        setCount(debounceCount + 1)
    }

    return (
        <div>
            <button onClick={handleClick}>+1</button>
            <div>{debounceCount}</div>
        </div>
    )
}