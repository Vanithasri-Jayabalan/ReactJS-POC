import React, { useState } from 'react'

export default function UseState() {
    const [count, setCount] = useState(0);


    const incrementCount = () => {
        setCount(count+1);
    }

    const decrementCount = () =>{
        setCount(count-1);
    }

    
  return (
    <div className='App'>
        <button onClick={incrementCount}>+</button>
        <br/><br/>
        <div>{count}</div>
        <br/><br/>
        <button onClick={decrementCount}>_</button>
    </div>
  )
}
