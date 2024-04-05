import React, { useEffect, useState } from "react"

const useDebounce = (newValue, delay) => {
    const [value, setValue] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(newValue)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [newValue])

    return value
}

export const CustomHookDemo = () => {
    const [value, setValue] = useState(0)

    const newValue = useDebounce(value, 1000);

    return (
        <div>
            <button onClick={() => { setValue(newValue + 1) }}>
                +1
            </button>
            <div>{value}</div>
        </div>
    )
}