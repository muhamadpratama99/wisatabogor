import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [score, setScore] = useState(0)
    function increment() {
        setScore(s => s+1)
    }
    function decrement() {
        if(score < 1) {
            setScore(0)
        } else {
            setScore(s => s-1)
        }
    }
  
    return (
    <>
        <h1>Counter Apps</h1>
        <button onClick={() => decrement()}>-1</button>
        <button onClick={() => increment()}>+1</button>
        <h1>Score: {score}</h1>
    </>
  )
}
