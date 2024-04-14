import React, { useEffect, useReducer, useState } from 'react'

function useClientSize() {
    const [windowSize, setWindowSize] = useState();

    const handleSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handleSize)

        return () => {
            window.removeEventListener('resize', handleSize)
        }
    }, [])

    return windowSize
}

export const WindowComponent = () => {
    const windowSize = useClientSize()

    return (
        <div>
            <div>
                width: {windowSize?.width}
            </div>
            <div>
                height: {windowSize?.height}
            </div>
        </div>
    )
}

