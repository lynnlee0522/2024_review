import React, { useEffect, useReducer, useState } from 'react'

function reducer(state, action) {
    console.log("---state---", state);
    switch (action.type) {
        case "increment":
            return { ...state, counter: state.counter + 1 };
        case "decrement":
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}
export default function ReducerHookDemo() {
    const [count, dispatch] = useReducer(reducer, { counter: 0 });

    console.log("--count---", count);

    return (
        <div>
            <button onClick={e => dispatch({ type: "increment" })}>+1</button>
        </div>
    )
}