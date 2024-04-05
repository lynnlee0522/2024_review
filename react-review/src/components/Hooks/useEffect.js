import React, { useEffect, useState } from 'react'

export default function EffectHookCancelDemo() {

  const [count, setCount] = useState({ name: 'hah' });

  useEffect(() => {
    console.log("effect更新了");

    return () => {
      console.log("effect卸载了")
    }
  }, [count]);

  const handleUpdate = () => {
    count.sex = 'f'
    console.log("---haha---", count);
  }


  return (
    <div>
      <h2>EffectHookCancelDemo</h2>
      <button onClick={e => handleUpdate()}>+1</button>
      <button onClick={e => setCount({ ...count, sex: 'f' })}>+2</button>
    </div>
  )
}