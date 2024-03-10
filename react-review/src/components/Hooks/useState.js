import React, { useEffect, useState } from 'react'

export default function StateHookDemo() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((preState) => {
            console.log("---pre--", preState);
            return count + 1;
        })
    }

    return (
        <div>
            <h2>EffectHookCancelDemo</h2>
            <h2>{count}</h2>
            <button onClick={e => handleClick(e)}>+1</button>
        </div>
    )
}