import React, { useRef } from 'react'

export const InputComponent = () => {
    const inputRef = useRef(null);

    const handleChange = () => {
        console.log("---value--", inputRef.current.value)
    }

    return (
        <input ref={inputRef} onChange={handleChange} />
    )
}