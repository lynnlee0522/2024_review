import React, { useEffect, useReducer, useState } from 'react'

const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return {
                ...state, counter: state.counter + 1
            }
        case 'decrement':
            return {
                ...state, counter: state.counter - 1
            }
        default:
            return state
    }

}

export default function ReducerHookDemo() {
    const [count, dispatch] = useReducer(reducer, { counter: 1 })

    return (
        <div>
            <div>
                now, the count is {count.counter}
            </div>
            <button onClick={() => {
                dispatch({ type: 'increment' })
            }}>
                +1
            </button>
            <button onClick={() => {
                dispatch({ type: 'decrement' })
            }}>
                -1
            </button>
        </div>
    )


}